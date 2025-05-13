import LogoHeader from "../../assets/geekup-logo-general.svg"
const Header = () => {
  return (
    <div className="w-max">
      <a href="/">
        <img
          alt="GEEK Up - PF GI"
          width={100}
          src={LogoHeader}
          className="hơver:cursor-pointer"
        />
      </a>
    </div>
  )
}

export default Header
