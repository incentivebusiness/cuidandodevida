"use client";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getSession } from "next-auth/react";

// Default values
const funeralLimitValue = 100000;
const medicalExpenseLimitValue = 50000;
const defaultRelationshipOptions = [
  "Select",
  "Family",
  "Child",
  "Spouse"
];

const schema = z.object({
  policyHolderName: z
    .string()
    .regex(
      /^[A-Za-zÀ-ÿ\s]+$/,
      "Policy holder's name must contain only letters and spaces"
    )
    .min(1, "Policy holder's name is required")
    .max(60, "Policy holder's name must be at most 60 characters"),
  relationship: z
    .string()
    .min(1, "Relationship is required")
    .refine((val) => val !== "Select", "Select a valid option"),
  funeralLimit: z
    .number()
    .min(1, "Funeral limit value is required")
    .positive("The value must be positive"),
  medicalExpenseLimit: z
    .number()
    .min(1, "Medical expense limit value is required")
    .positive("The value must be positive"),
  userBirthdate: z
    .string()
    .regex(
      /^\d{4}-\d{2}-\d{2}$/,
      "Birthdate must be in the format YYYY-MM-DD"
    ),
  livesQuantity: z
    .number()
    .min(1, "Lives quantity is required")
    .positive("The value must be positive"),
  phone: z
    .string()
    .regex(
      /^\d{10,11}$/,
      "Phone number must be in the format DDD + Number (digits only)"
    ),
  phone2: z
    .string()
    .regex(
      /^\d{10,11}$/,
      "Phone number must be in the format DDD + Number (digits only)"
    ).optional(),

  address: z.string().min(1, "Address is required"),
  postalCode: z
    .string()
    .regex(/^\d{5}-\d{3}$/, "Postal Code must be in the format XXXXX-XXX")
    .min(1, "Postal Code is required"),
  city: z.string().min(1, "City is required"),
  state: z
    .string()
    .length(2, "State must be 2 characters")
    .regex(/^[A-Z]{2}$/, "State must be represented by two uppercase letters")
    .min(1, "State is required"),
  neighborhood: z.string().min(1, "Neighborhood is required"),
});

type FormInputs = {
  policyHolderName: string;
  relationship: string;
  funeralLimit: number;
  medicalExpenseLimit: number;
  livesQuantity: number;
  userBirthdate: string;
  phone: string;
  phone2?: string;
  userId?: string;
  email: string;
  address: string;
  postalCode: string;
  city: string;
  state: string;
  neighborhood: string;
};

const AssistanceForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(schema),
    defaultValues: {
      funeralLimit: funeralLimitValue,
      medicalExpenseLimit: medicalExpenseLimitValue,
    },
  });

  const router = useRouter();
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // Fetch user ID from session
    const fetchUserId = async () => {
      const session = await getSession(); // Example using next-auth
      if (session?.user?.id) {
        setUserId(session.user.id);
      }
    };

    fetchUserId();
  }, []);

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    if (userId) {
      data.userId = userId; // Add logged-in user ID to data object
    }
    try {
      console.log("Sending data:", data);
      const response = await fetch("/api/assistanceForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        router.push("/");
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8 space-y-4">
      <div>
        <label
          htmlFor="policyHolderName"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Policy Holder's Name
        </label>
        <input
          {...register("policyHolderName")}
          type="text"
          id="policyHolderName"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.policyHolderName ? "border-red-500" : ""
          }`}
        />
        {errors.policyHolderName && (
          <p className="text-red-500 text-xs italic">
            {errors.policyHolderName.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="relationship"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Relationship to Policy Holder
        </label>
        <select
          {...register("relationship")}
          id="relationship"
          className={`shadow appearance-none border rounded w-[80%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.relationship ? "border-red-500" : ""
          }`}
        >
          {defaultRelationshipOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.relationship && (
          <p className="text-red-500 text-xs italic">
            {errors.relationship.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="funeralLimit"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Funeral Limit Value
        </label>
        <input disabled
          {...register("funeralLimit", { valueAsNumber: true })}
          type="number"
          id="funeralLimit"
          defaultValue={funeralLimitValue}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.funeralLimit ? "border-red-500" : ""
          }`}
        />
        {errors.funeralLimit && (
          <p className="text-red-500 text-xs italic">
            {errors.funeralLimit.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="medicalExpenseLimit"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Medical Expense Limit Value
        </label>
        <input disabled
          {...register("medicalExpenseLimit", { valueAsNumber: true })}
          type="number"
          id="medicalExpenseLimit"
          defaultValue={medicalExpenseLimitValue}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.medicalExpenseLimit ? "border-red-500" : ""
          }`}
        />
        {errors.medicalExpenseLimit && (
          <p className="text-red-500 text-xs italic">
            {errors.medicalExpenseLimit.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="userBirthdate"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Assistance User's Birthdate
        </label>
        <input
          {...register("userBirthdate")}
          type="date"
          id="userBirthdate"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.userBirthdate ? "border-red-500" : ""
          }`}
        />
        {errors.userBirthdate && (
          <p className="text-red-500 text-xs italic">
            {errors.userBirthdate.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="livesQuantity"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Number of Lives (number of users covered by assistance)
        </label>
        <input
          {...register("livesQuantity", { valueAsNumber: true })}
          type="number"
          id="livesQuantity"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.livesQuantity ? "border-red-500" : ""
          }`}
        />
        {errors.livesQuantity && (
          <p className="text-red-500 text-xs italic">
            {errors.livesQuantity.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Phone
        </label>
        <input
          {...register("phone")}
          type="text"
          id="phone"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.phone ? "border-red-500" : ""
          }`}
        />
        {errors.phone && (
          <p className="text-red-500 text-xs italic">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone2"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Phone 2 (optional)
        </label>
        <input
          {...register("phone2")}
          type="text"
          id="phone2"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.phone2 ? "border-red-500" : ""
          }`}
        />
        {errors.phone2 && (
          <p className="text-red-500 text-xs italic">
            {errors.phone2.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="address"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Address
        </label>
        <input
          {...register("address")}
          type="text"
          id="address"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.address ? "border-red-500" : ""
          }`}
        />
        {errors.address && (
          <p className="text-red-500 text-xs italic">
            {errors.address.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="postalCode"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Postal Code
        </label>
        <input
          {...register("postalCode")}
          type="text"
          id="postalCode"
          placeholder="XXXXX-XXX"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.postalCode ? "border-red-500" : ""
          }`}
        />
        {errors.postalCode && (
          <p className="text-red-500 text-xs italic">
            {errors.postalCode.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="city"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          City
        </label>
        <input
          {...register("city")}
          type="text"
          id="city"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.city ? "border-red-500" : ""
          }`}
        />
        {errors.city && (
          <p className="text-red-500 text-xs italic">
            {errors.city.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="state"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          State
        </label>
        <input
          {...register("state")}
          type="text"
          id="state"
          placeholder="UF"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.state ? "border-red-500" : ""
          }`}
        />
        {errors.state && (
          <p className="text-red-500 text-xs italic">
            {errors.state.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="neighborhood"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Neighborhood
        </label>
        <input
          {...register("neighborhood")}
          type="text"
          id="neighborhood"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.neighborhood ? "border-red-500" : ""
          }`}
        />
        {errors.neighborhood && (
          <p className="text-red-500 text-xs italic">
            {errors.neighborhood.message}
          </p>
        )}
      </div>

      <div className="flex justify-between items-center mt-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Save Changes
        </button>
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default AssistanceForm;
