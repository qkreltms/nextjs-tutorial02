export default function Post({ id, data }) {
  return (
    <div>
      <img src={data.message} />
      <p>{id}</p>
    </div>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [
      ...["hound", "mix", "pomeranian", "pitbull"].map((breed) => {
        return {
          params: {
            id: breed,
          },
        };
      }),
    ],
    // paths에 없는 id는 404가 뜬다.
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  return fetch(`https://dog.ceo/api/breed/${params.id}/images/random`)
    .then((res) => res.json())
    .then(
      (data) => {
        console.log(data);
        return {
          props: {
            id: params.id,
            data,
          },
        };
      },
      (err) => {}
    );
};
