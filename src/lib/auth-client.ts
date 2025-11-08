import { signIn } from "next-auth/react";

export const authClient = {
  signIn: {
    email: async (
      credentials: { email: string; password: string },
      options: {
        onSuccess?: () => void;
        onError?: (error: { error: { message: string } }) => void;
      }
    ) => {
      try {
        const result = await signIn("credentials", {
          email: credentials.email,
          password: credentials.password,
          redirect: false,
        });

        if (result?.error) {
          options.onError?.({ 
            error: { 
              message: result.error 
            } 
          });
          return;
        }

        options.onSuccess?.();
      } catch (e) {
        options.onError?.({ 
          error: { 
            message: e instanceof Error ? e.message : "An error occurred" 
          } 
        });
      }
    },
  },
};