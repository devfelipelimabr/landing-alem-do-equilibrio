export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

// Generate login URL at runtime so redirect URI reflects the current origin.
/**
 * Design: Moderno Acolhedor — dados oficiais de contato centralizados para
 * manter WhatsApp e e-mail consistentes em todos os pontos da experiência.
 */
export const OFFICIAL_WHATSAPP = "(71) 9 8359-3291";
export const OFFICIAL_WHATSAPP_HREF = "https://wa.me/5571983593291?text=Ol%C3%A1%21%20Vim%20pelo%20site%20Al%C3%A9m%20do%20Equil%C3%ADbrio%20e%20gostaria%20de%20saber%20mais.";
export const OFFICIAL_EMAIL = "alem.do.equilibrio@hotmail.com";
export const OFFICIAL_EMAIL_HREF = `mailto:${OFFICIAL_EMAIL}`;

export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};
