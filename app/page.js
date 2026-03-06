function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}
 
export default function HomePage() {
  return (
    <div className="homePage">
      <div className="homeImg"></div>
      <div className='coverScreen'>
        <p className="title">Hello There!</p>
      </div>
    <div>
      <p className="page">
        Hello!
      </p>
    </div>
    </div>
  );
}