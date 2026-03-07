function GetCoverScreen () {
  return (
      <div className='coverScreen'>
        <h1 className="title">Heather Hotel & Spa</h1>
        <h3 className="subTitle">Immerse Yourself in Scotland</h3>
      </div>
  )
}

export default function HomePage() {
  return (
    <div className="homePage">
    <div className="homeImg"></div>
    <GetCoverScreen />
    <div className="myRect"></div>
    <div>
      <p className="page">
        Hello!
      </p>
    </div>
    </div>
  );
}