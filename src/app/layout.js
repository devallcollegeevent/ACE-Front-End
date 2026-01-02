import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ClientLayout from "../components/ClientLayout";
import Providers from "../components/Providers";
import { LoadingProvider } from "../context/LoadingContext";
import GlobalLoader from "../components/global/GlobalLoader/GlobalLoader";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GoogleOAuthProvider
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
        >
          <LoadingProvider>
            <GlobalLoader />

            <Providers>
              <ClientLayout>{children}</ClientLayout>
            </Providers>
          </LoadingProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
