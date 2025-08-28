// import { generateOGImage } from "fumadocs-ui/og";
import { generateOGImage } from "@/lib/generateOGImage";
import { metadataImage } from "@/lib/metadata-image";

export const GET = metadataImage.createAPI(async (page) => {
  return generateOGImage({
    description: page.data.description,
    title: page.data.title,
  });
});

export function generateStaticParams() {
  return metadataImage.generateParams();
}