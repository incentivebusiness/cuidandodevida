// // 'use client'

// // import { useState } from 'react';

// // const FormDocusign = () => {
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [message, setMessage] = useState('');

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await fetch('/api/docusign', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ name, email }),
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         // Redirecionar para a URL de visualização do DocuSign
// //         window.location.href = data.url;
// //         setMessage(`Envelope criado com sucesso! Acesse aqui: ${data.url}`);
// //       } else {
// //         setMessage(`Erro: ${data.error}`);
// //       }
// //     } catch (error) {
// //       setMessage(`Erro ao enviar: ${error}`);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <input
// //         type="text"
// //         placeholder="Nome"
// //         value={name}
// //         onChange={(e) => setName(e.target.value)}
// //         required
// //       />
// //       <input
// //         type="email"
// //         placeholder="Email"
// //         value={email}
// //         onChange={(e) => setEmail(e.target.value)}
// //         required
// //       />

// //       <button type="submit">Enviar</button>
// //       {message && <p>{message}</p>}
// //     </form>
// //   );
// // };

// // export default FormDocusign;

// 'use client';

// import { useState } from 'react';



// const FormDocusign = () => {
//   // Dados do contrato
//   const [fullName, setFullName] = useState('');
//   const [socialName, setSocialName] = useState('');
//   const [cpf, setCpf] = useState('');
//   const [birthDate, setBirthDate] = useState('');
//   const [phone, setPhone] = useState('');
//   const [salaryRange, setSalaryRange] = useState('');
//   const [nationality, setNationality] = useState('');
//   const [maritalStatus, setMaritalStatus] = useState('');
//   const [gender, setGender] = useState('');
//   const [profession, setProfession] = useState('');
//   const [address, setAddress] = useState('');
//   const [city, setCity] = useState('');
//   const [uf, setUf] = useState('');
//   const [zipCode, setZipCode] = useState('');
//   const [email, setEmail] = useState('');
//   const [emailAuthorization, setEmailAuthorization] = useState('');
//   const [politicallyExposed, setPoliticallyExposed] = useState('');

//   // Dados dos beneficiários
//   const [beneficiaries, setBeneficiaries] = useState([{ name: '', relationship: '', participation: '' }]);

//   // Local e Data
//   const [location, setLocation] = useState('');
//   const [date, setDate] = useState('');

//   // Mensagem
//   const [message, setMessage] = useState('');

//   // Validações (não mudamos aqui)
//   const validateCPF = (cpf) => true;
//   const validateZipCode = (zipCode) => /^[0-9]{5}-[0-9]{3}$/.test(zipCode);
//   const validateBirthDate = (date) => /^\d{4}-\d{2}-\d{2}$/.test(date);

//   const handleAddBeneficiary = () => {
//     setBeneficiaries([...beneficiaries, { name: '', relationship: '', participation: '' }]);
//   };

//   const handleBeneficiaryChange = (index, field, value) => {
//     const newBeneficiaries = [...beneficiaries];
//     newBeneficiaries[index][field] = value;
//     setBeneficiaries(newBeneficiaries);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validações (não mudamos aqui)
//     if (!validateCPF(cpf)) {
//       setMessage('CPF inválido.');
//       return;
//     }
//     if (!validateZipCode(zipCode)) {
//       setMessage('CEP inválido. Formato: 12345-678');
//       return;
//     }
//     if (!validateBirthDate(birthDate)) {
//       setMessage('Data de nascimento inválida. Formato: YYYY-MM-DD');
//       return;
//     }

//     try {
//       const response = await fetch('/api/docusign', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           fullName,
//           socialName,
//           cpf,
//           birthDate,
//           phone,
//           salaryRange,
//           nationality,
//           maritalStatus,
//           gender,
//           profession,
//           address,
//           city,
//           uf,
//           zipCode,
//           email,
//           emailAuthorization,
//           politicallyExposed,
//           beneficiaries,
//           location,
//           date,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         window.location.href = data.url;
//         setMessage(`Envelope criado com sucesso! Acesse aqui: ${data.url}`);
//       } else {
//         setMessage(`Erro: ${data.error}`);
//       }
//     } catch (error) {
//       setMessage(`Erro ao enviar: ${error}`);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg grid grid-cols-2 gap-6">
//       <div>
//         <h3 className="text-xl font-semibold mb-4">Dados do Contrato</h3>
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Nome Completo</label>
//             <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Nome Social</label>
//             <input type="text" value={socialName} onChange={(e) => setSocialName(e.target.value)} className="w-full p-2 border border-gray-300 rounded" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">CPF</label>
//             <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Data de Nascimento</label>
//             <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Telefone</label>
//             <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-2 border border-gray-300 rounded" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Faixa Salarial</label>
//             <input type="text" value={salaryRange} onChange={(e) => setSalaryRange(e.target.value)} className="w-full p-2 border border-gray-300 rounded" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Nacionalidade</label>
//             <input type="text" value={nationality} onChange={(e) => setNationality(e.target.value)} className="w-full p-2 border border-gray-300 rounded" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Estado Civil</label>
//             <input type="text" value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)} className="w-full p-2 border border-gray-300 rounded" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Sexo</label>
//             <select value={gender} onChange={(e) => setGender(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required>
//               <option value="">Selecione</option>
//               <option value="M">Masculino</option>
//               <option value="F">Feminino</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Profissão/Atividade</label>
//             <input type="text" value={profession} onChange={(e) => setProfession(e.target.value)} className="w-full p-2 border border-gray-300 rounded" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Endereço Completo</label>
//             <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Cidade</label>
//             <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">UF</label>
//             <input type="text" value={uf} onChange={(e) => setUf(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">CEP</label>
//             <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Autoriza envio de email?</label>
//             <select value={emailAuthorization} onChange={(e) => setEmailAuthorization(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required>
//               <option value="">Selecione</option>
//               <option value="sim">Sim</option>
//               <option value="nao">Não</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Pessoa Politicamente Exposta?</label>
//             <select value={politicallyExposed} onChange={(e) => setPoliticallyExposed(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required>
//               <option value="">Selecione</option>
//               <option value="sim">Sim</option>
//               <option value="nao">Não</option>
//             </select>
//           </div>
//           {/* Dados dos beneficiários */}
//           <h3 className="text-xl font-semibold mb-4">Dados dos Beneficiários</h3>
//           {beneficiaries.map((beneficiary, index) => (
//             <div key={index} className="space-y-2">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Beneficiário</label>
//                 <input
//                   type="text"
//                   value={beneficiary.name}
//                   onChange={(e) => handleBeneficiaryChange(index, 'name', e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded"
//                   required={index === 0}
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Grau de Parentesco</label>
//                 <input
//                   type="text"
//                   value={beneficiary.relationship}
//                   onChange={(e) => handleBeneficiaryChange(index, 'relationship', e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded"
//                   required={index === 0}
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Participação</label>
//                 <input
//                   type="text"
//                   value={beneficiary.participation}
//                   onChange={(e) => handleBeneficiaryChange(index, 'participation', e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded"
//                   required={index === 0}
//                 />
//               </div>
//             </div>
//           ))}
//           <button type="button" onClick={handleAddBeneficiary} className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Adicionar Beneficiário</button>
//         </div>
//       </div>

//       <div>
//         <h3 className="text-xl font-semibold mb-4">Dados do Certificado</h3>
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Nome Completo</label>
//             <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Nome Social</label>
//             <input type="text" value={socialName} onChange={(e) => setSocialName(e.target.value)} className="w-full p-2 border border-gray-300 rounded" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">CPF</label>
//             <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Data de Nascimento</label>
//             <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Telefone</label>
//             <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-2 border border-gray-300 rounded" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Endereço Completo</label>
//             <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Cidade</label>
//             <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">UF</label>
//             <input type="text" value={uf} onChange={(e) => setUf(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">CEP</label>
//             <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required />
//           </div>
//           {/* Local e Data */}
//           <h3 className="text-xl font-semibold mb-4">Local e Data</h3>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Local</label>
//             <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Data</label>
//             <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required />
//           </div>
//         </div>
//       </div>

//       <button type="submit" className="mt-4 p-2 bg-green-500 text-white rounded hover:bg-green-600 col-span-2">Enviar</button>
//       {message && <p className="mt-4 text-red-500 col-span-2">{message}</p>}
//     </form>
//   );
// };

// export default FormDocusign;

import React from 'react'

const FormDocusign = () => {
  return (
    <div>
      
    </div>
  )
}

export default FormDocusign
