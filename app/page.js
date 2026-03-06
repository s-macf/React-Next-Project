function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}
 
export default function HomePage() {
  return (
    <div className="homePage">
      <div className="homeImg"></div>
      <div className='coverScreen'>
        <h1 className="title">Heather Hotel & Spa</h1>
        <h3 className="subTitle">Immerse Yourself in Scotland</h3>
      </div>
    <div>
      <p className="page">
        Hello!
      </p>
    </div>
    </div>
  );
}