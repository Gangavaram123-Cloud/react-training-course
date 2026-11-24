export default function Profile() {
  const avatar = "https://react.dev/images/docs/scientists/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";
  return (
   <>
    <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
       <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma',
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
      
   </>
  );
}


function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function getImageUrl(person, size = 's') {
  return (
    'https://react.dev/images/docs/scientists/' +
    person.imageId +
    size +
    '.jpg'
  );
}