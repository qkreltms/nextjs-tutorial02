import styles from "../styles/Home.module.css";
import Link from "next/link";

/**
 *
 * I referenced this repository: https://github.com/vercel/preview-mode-demo
 * Feel free to watch it!
 */

export default function Home({ data, preview, ...rest }) {
  return (
    <div className={styles.container}>
      <p>You are watching random breed dog</p>
      <img src={data.message} />
      <pre>{data.status || "nothing..."}</pre>
      <pre>{preview ? "*You are in preview*" : ""}</pre>

      <p>Or you can see other breeds in preview mode...</p>
      <ul>
        {["hound", "mix", "pomeranian", "pitbull"].map((breed) => (
          <li key={breed}>
            <Link href={`/test/${breed}`}>
              <a>{breed}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps = async ({ preview, previewData }) => {
  console.log("isPreviewMode: " + preview, previewData);

  // NOTE: 콘솔창에 찍히는 로그로 클릭한 종이 제대로 이미지로 왔는지 확인!
  if (preview) {
    return fetch(`https://dog.ceo/api/breed/${previewData.id}/images/random`)
      .then((res) => res.json())
      .then(
        (data) => {
          console.log(data);
          return {
            props: {
              data,
              preview,
            },
          };
        },
        (err) => {}
      );
  } else {
    return fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then(
        (data) => {
          console.log(data);
          return {
            props: {
              data,
              preview: false,
            },
          };
        },
        (err) => {}
      );
  }
};

// export const getServerSideProps = async ({ preview, previewData }) => {
//   console.log("isPreviewMode: " + preview, previewData);

//   // NOTE: 콘솔창에 찍히는 로그로 클릭한 종이 제대로 이미지로 왔는지 확인!
//   if (preview) {
//     return fetch(`https://dog.ceo/api/breed/${previewData.id}/images/random`)
//       .then((res) => res.json())
//       .then(
//         (data) => {
//           console.log(data);
//           return {
//             props: {
//               data,
//               preview,
//             },
//           };
//         },
//         (err) => {}
//       );
//   } else {
//     return fetch("https://dog.ceo/api/breeds/image/random")
//       .then((res) => res.json())
//       .then(
//         (data) => {
//           console.log(data);
//           return {
//             props: {
//               data,
//               preview: false,
//             },
//           };
//         },
//         (err) => {}
//       );
//   }
// };
