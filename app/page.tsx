import { permanentRedirect } from "next/navigation";
import { HOME_ROUTE_PATH } from "@/lib/constants";

/** L’URL partagée `/` mène immédiatement à l’accueil réel — plus d’écran d’attente. */
export default function RootPage() {
  permanentRedirect(HOME_ROUTE_PATH);
}
