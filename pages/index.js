import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <img src={data.message} />
      <pre>{data.status || "nothing..."}</pre>

      <p>Or you can see other breeds...</p>
      <ul>
        {["hound", "mix", "pomeranian", "pitbull"].map((breed) => (
          <li>
            <Link href={`/posts/${breed}`}>
              <a>{breed}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then(
      (data) => {
        console.log(data);
        return {
          props: {
            data,
          },
        };
      },
      (err) => {}
    );
};
// export const getServerSideProps = async () => {
//   return fetch("https://dog.ceo/api/breeds/image/random")
//     .then((res) => res.json())
//     .then(
//       (data) => {
//         console.log(data)
//         return {
//           props: {
//             data,
//           },
//         };
//       },
//       (err) => {}
//     );
// };
