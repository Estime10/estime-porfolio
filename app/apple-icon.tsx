import { ImageResponse } from "next/og";
import { BRAND_LOGO_SURFACE_GRADIENT } from "@/lib/constants";
import { loadInstrumentSansSemibold } from "@/lib/metadata/icon/loadInstrumentSansSemibold";

export const size = { width: 180, height: 180 };

const CORNER_RADIUS_PX = 40;

export const contentType = "image/png";

export default async function AppleIcon(): Promise<ImageResponse> {
  let fonts:
    { name: "Instrument Sans"; data: ArrayBuffer; style: "normal"; weight: 600 }[] | undefined;
  try {
    const data = await loadInstrumentSansSemibold();
    fonts = [{ name: "Instrument Sans", data, style: "normal", weight: 600 }];
  } catch {
    fonts = undefined;
  }

  return new ImageResponse(
    <div
      style={{
        width: size.width,
        height: size.height,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        background: BRAND_LOGO_SURFACE_GRADIENT,
        border: "2px solid rgba(248, 250, 252, 0.42)",
        borderRadius: CORNER_RADIUS_PX,
      }}
    >
      <span
        style={{
          color: "#ffffff",
          fontSize: 78,
          fontWeight: 600,
          letterSpacing: "-0.06em",
          fontFamily: fonts ? "Instrument Sans" : "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        EV
      </span>
    </div>,
    {
      width: size.width,
      height: size.height,
      ...(fonts ? { fonts } : {}),
    },
  );
}
