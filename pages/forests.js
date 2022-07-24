import Image from "next/image";
import img from "../public/1.jpg";

function ForestPage() {
  return (
    <div>
      {
        // To add a placeholder the image should be a static. That is why we import it
        // above. This helps to show a blur image until the actual image fully loads and takes over.
      }
      <Image
        src={img}
        placeholder="blur"
        alt="forest"
        width={300}
        height={420}
      />

      {[1, 2, 3, 4, 5].map((path) => {
        return (
          <div key={path}>
            <Image
              src={`/${path}.jpg`}
              alt="forrest"
              width="300"
              height="420"
            />
          </div>
        );
      })}
    </div>
  );
}

export default ForestPage;
