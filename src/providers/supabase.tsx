// "use client";
// import { ReactNode } from "react";
// import { SessionContextProvider } from "@supabase/auth-helpers-react";
// import { createBrowserClient } from "@supabase/ssr";

// const SupabaseProvider = ({ children }: { children: ReactNode }) => {
//   const supabase = createBrowserClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.SUPABASE_ANON_KEY!
//   );
//   return (
//     <SessionContextProvider supabaseClient={supabase}>
//       {children}
//     </SessionContextProvider>
//   );
// };

// export default SupabaseProvider;