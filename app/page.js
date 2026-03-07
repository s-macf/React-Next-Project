function GetCoverScreen () {
  return (
      <div className='coverScreen'>
        <div className="homeImg"></div>
        <h1 className="title">Heather Hotel & Spa</h1>
        <h3 className="subTitle">Immerse Yourself in Scotland</h3>
      </div>
  )
}

export default function HomePage() {
  return (
    <div className="homePage">
    <GetCoverScreen />
    <div className="coverScreenBottom">
      <img src="/home/homeDivider.png" alt="Missing Image" className="coverScreenDivider"></img>
    </div>
    <div>
      <p className="page">
        Hello!
      </p>
    </div>
    </div>
  );
}