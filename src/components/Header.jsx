import { Link } from "react-router-dom";
import LogoAsset from "./asset/LogoAsset";

const GNB = [
  { mainTitle: "공연안내", subTitle: "Performance", link: "/performance" },
  { mainTitle: "공간 대관안내", subTitle: "Rental", link: "/rental" },
  { mainTitle: "맴버십", subTitle: "Membership", link: "/membership" },
  { mainTitle: "아카데미", subTitle: "Academy", link: "/academy" },
  { mainTitle: "커뮤니티", subTitle: "Community", link: "/community" },
  { mainTitle: "대구엑스포", subTitle: "Contact", link: "/contact" },
];
export default function Header() {
  return (
    <div className="w-full flex justify-center h-[200px] shadow-md">
      {/* 좌우 여백을 위한 박스 */}
      <div className="w-full flex justify-center px-[80px]">
        <div className="w-full flex justify-center relative">
          {/* 메뉴리스트 */}
          <div className="w-full flex justify-center items-center space-x-8">
            {GNB.map(({ mainTitle, subTitle, link }) => (
              <Link key={mainTitle} to={link}>
                <div className="flex flex-col justify-center">
                  <h1 className="text-lg font-semibold">{mainTitle}</h1>
                  <p className="uppercase text-sm font-light">{subTitle}</p>
                </div>
              </Link>
            ))}
          </div>
          {/* LOGO */}
          <div className="absolute left-0 h-full flex items-center">
            <LogoAsset width="w-48" />
          </div>
        </div>
      </div>
    </div>
  );
}
