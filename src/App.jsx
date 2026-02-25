import { useState } from "react";
import { Receipt, Ticket, ArrowDownToLine } from "lucide-react";

/* ── 원본 디자인 토큰 (bomyeon.web.app CSS 변수 그대로) ── */
const T = {
  bgGray1:    "#F9FAFC",
  bgGray3:    "#F3F3F6",
  white:      "#FFFFFF",
  blue:       "#242F54",
  lineGray1:  "#E5E5EC",
  lineGray3:  "#EBEBF3",
  radiusMd:   "8px",
  radiusFull: "9999px",
  textBlack1: "#2C3352",
  textBlack3: "#3A4267",
  textGray1:  "#87898D",
  textGray3:  "#8F98A5",
};

/* ── 데이터 ── */
const products = [
  { id:1,  brand:"네이버페이",  name:"네이버페이 포인트 1,000원",       price:1000, category:"상품권", initials:"N",  bg:"#e8f5e9", color:"#03C75A" },
  { id:2,  brand:"네이버페이",  name:"네이버페이 포인트 5,000원",       price:5000, category:"상품권", initials:"N",  bg:"#e8f5e9", color:"#03C75A" },
  { id:3,  brand:"GS25",        name:"GS25모바일금액상품권 1,000원",    price:1000, category:"편의점", initials:"GS", bg:"#e3f2fd", color:"#1565C0" },
  { id:4,  brand:"메가MGC커피", name:"(HOT)아메리카노",                 price:1700, category:"카페",   initials:"MG", bg:"#fffde7", color:"#C49A00" },
  { id:5,  brand:"뚜레쥬르",    name:"뚜레쥬르 모바일금액권 5,000원",   price:5000, category:"베이커리",initials:"TJ", bg:"#fce4ec", color:"#c62828" },
  { id:6,  brand:"신세계",      name:"신세계상품권 5천원권",             price:5000, category:"상품권", initials:"SS", bg:"#f3e5f5", color:"#6a1b9a" },
  { id:7,  brand:"스타벅스",    name:"아메리카노 Tall",                  price:4500, category:"카페",   initials:"SB", bg:"#e8f5e9", color:"#00704A" },
  { id:8,  brand:"CU",          name:"CU 모바일금액권 3,000원",          price:3000, category:"편의점", initials:"CU", bg:"#fff3e0", color:"#e65100" },
  { id:9,  brand:"파리바게뜨",  name:"파리바게뜨 모바일금액권 5,000원", price:5000, category:"베이커리",initials:"PB", bg:"#fce4ec", color:"#b71c1c" },
  { id:10, brand:"배스킨라빈스",name:"파인트 아이스크림",                price:9800, category:"편의점", initials:"BR", bg:"#fce4ec", color:"#e53935" },
  { id:11, brand:"투썸플레이스",name:"아이스 아메리카노",                price:4500, category:"카페",   initials:"TS", bg:"#f9fbe7", color:"#558b2f" },
  { id:12, brand:"이디야커피",  name:"아메리카노(ICE)",                  price:3500, category:"카페",   initials:"ED", bg:"#e8eaf6", color:"#283593" },
];

const popularItems = [
  { brand:"배스킨라빈스", name:"파인트 아이스크림", price:9800, initials:"BR", bg:"#fce4ec", color:"#e53935" },
  { brand:"스타벅스",    name:"아메리카노 Tall",    price:4500, initials:"SB", bg:"#e8f5e9", color:"#00704A" },
  { brand:"투썸플레이스",name:"아이스 아메리카노",  price:4500, initials:"TS", bg:"#f9fbe7", color:"#558b2f" },
];

const priceRanges  = ["1만원 미만","1만원 대","2만원 대","3만원 이상"];
const categories   = ["전체","상품권","편의점","카페","베이커리"];

/* ── 상품 카드 (_productCard_3rebp_284 스타일 그대로) ── */
function ProductCard({ product }) {
  const [active, setActive] = useState(false);
  return (
    <div
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onMouseLeave={() => setActive(false)}
      style={{
        /* _productCard_3rebp_284 */
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
        background: T.white,
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: active ? "rgba(0,0,0,0.04) 0px 1px 4px" : "rgba(0,0,0,0.06) 0px 1px 8px",
        transition: "transform 0.15s, box-shadow 0.15s",
        transform: active ? "scale(0.97)" : "scale(1)",
        cursor: "pointer",
      }}
    >
      {/* _productImageWrap_3rebp_300 */}
      <div style={{ width:"100%", aspectRatio:"1/1", overflow:"hidden", background: T.bgGray3,
                    display:"flex", alignItems:"center", justifyContent:"center",
                    backgroundColor: product.bg }}>
        <span style={{ fontSize:36, fontWeight:900, color:product.color,
                       fontFamily:"'Arial Black', sans-serif", letterSpacing:"-1px" }}>
          {product.initials}
        </span>
      </div>
      {/* _productBrand_3rebp_318 */}
      <div style={{ fontSize:10, color:T.textGray1, width:"100%", whiteSpace:"nowrap",
                    overflow:"hidden", textOverflow:"ellipsis", padding:"8px 8px 0",
                    letterSpacing:"-0.2px", textAlign:"center" }}>
        {product.brand}
      </div>
      {/* _productName_3rebp_329 */}
      <div style={{ fontSize:11, fontWeight:500, color:T.textBlack3, width:"100%",
                    whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis",
                    padding:"2px 8px 0", letterSpacing:"-0.2px", textAlign:"center" }}>
        {product.name}
      </div>
      {/* _productPrice_3rebp_341 */}
      <div style={{ fontSize:13, fontWeight:800, color:T.textBlack1,
                    padding:"4px 8px 10px", letterSpacing:"-0.3px", textAlign:"center" }}>
        {product.price.toLocaleString()}원
      </div>
    </div>
  );
}

/* ── 캐러셀 카드 (_carouselCard_3rebp_145 스타일 그대로) ── */
function CarouselCard({ item, offset, onClick }) {
  const isCenter = offset === 0;
  const hidden   = Math.abs(offset) > 1;
  return (
    <div
      onClick={onClick}
      style={{
        /* _carouselCard_3rebp_145 */
        position: "absolute",
        top: 0,
        left: "50%",
        width: 210,
        background: T.white,
        borderRadius: 16,
        boxShadow: "rgba(0,0,0,0.08) 0px 4px 20px",
        overflow: "hidden",
        transition: "transform 0.4s, opacity 0.4s",
        transformOrigin: "center center",
        cursor: "pointer",
        /* 위치·스케일은 transform으로 */
        transform: `translateX(calc(-50% + ${offset * 130}px)) scale(${isCenter ? 1 : 0.82})`,
        opacity: hidden ? 0 : isCenter ? 1 : 0.55,
        zIndex: isCenter ? 10 : 5 - Math.abs(offset),
        filter: isCenter ? "none" : "blur(0.5px)",
        pointerEvents: hidden ? "none" : "auto",
      }}
    >
      {/* _carouselImage_3rebp_159 */}
      <div style={{ width:"100%", aspectRatio:"1/1", display:"flex", alignItems:"center",
                    justifyContent:"center", backgroundColor: item.bg }}>
        <span style={{ fontSize:72, fontWeight:900, color:item.color,
                       fontFamily:"'Arial Black', sans-serif", letterSpacing:"-3px" }}>
          {item.initials}
        </span>
      </div>
      {/* _carouselInfo_3rebp_166 */}
      <div style={{ padding:"12px 14px 14px" }}>
        {/* _carouselBrand_3rebp_170 */}
        <div style={{ fontSize:11, color:T.textGray1, marginBottom:4, textAlign:"center", letterSpacing:"-0.2px" }}>
          {item.brand}
        </div>
        {/* _carouselName_3rebp_178 */}
        <div style={{ fontSize:14, fontWeight:600, color:T.textBlack1, whiteSpace:"nowrap",
                      overflow:"hidden", textOverflow:"ellipsis", marginBottom:6,
                      textAlign:"center", letterSpacing:"-0.3px" }}>
          {item.name}
        </div>
        {/* _carouselPrice_3rebp_190 */}
        <div style={{ fontSize:16, fontWeight:800, color:T.blue, textAlign:"center", letterSpacing:"-0.3px" }}>
          {item.price.toLocaleString()}원
        </div>
      </div>
    </div>
  );
}

/* ── 메인 컴포넌트 ── */
export default function GiftShop() {
  const [activePrice,    setActivePrice]    = useState("1만원 미만");
  const [activeCategory, setActiveCategory] = useState("전체");
  const [carouselIndex,  setCarouselIndex]  = useState(0);
  const [showMore,       setShowMore]       = useState(false);

  const filtered = products.filter(p => {
    const catOk = activeCategory === "전체" || p.category === activeCategory;
    const priceOk =
      activePrice === "1만원 미만" ? p.price < 10000 :
      activePrice === "1만원 대"   ? p.price >= 10000 && p.price < 20000 :
      activePrice === "2만원 대"   ? p.price >= 20000 && p.price < 30000 :
      p.price >= 30000;
    return catOk && priceOk;
  });

  const displayed = showMore ? filtered : filtered.slice(0, 6);

  return (
    <div style={{
      minHeight: "100dvh",
      backgroundColor: T.bgGray1,
      fontFamily: "'Apple SD Gothic Neo','Malgun Gothic','Noto Sans KR',sans-serif",
      maxWidth: 480,
      margin: "0 auto",
      overflowX: "hidden",
    }}>

      {/* ── 헤더 ── */}
      <div style={{
        background: T.white, padding:"16px 20px",
        display:"flex", alignItems:"center",
        position:"sticky", top:0, zIndex:100,
        borderBottom:`1px solid ${T.lineGray3}`,
      }}>
        <button style={{ background:"none", border:"none", cursor:"pointer",
                         fontSize:22, color:T.textBlack1, padding:"0 12px 0 0", lineHeight:1 }}>
          ‹
        </button>
        <span style={{ flex:1, textAlign:"center", fontSize:16, fontWeight:600, color:T.textBlack1 }}>
          소득사용 기프트샵
        </span>
        <div style={{ width:34 }} />
      </div>

      {/* ── 퀵 메뉴 (_quickActions / _quickActionItem_) ── */}
      <div style={{ display:"flex", gap:10, padding:"16px 20px 12px" }}>
        {[
          { icon:<Receipt size={22} />,          label:"소득사용내역", iconBg:"rgba(154,159,176,0.12)", iconColor:"#9A9FB0" },
          { icon:<Ticket size={22} />,             label:"쿠폰보관함",   iconBg:"rgba(154,159,176,0.12)", iconColor:"#9A9FB0" },
          { icon:<ArrowDownToLine size={22} />,    label:"현금출금",      iconBg:"rgba(154,159,176,0.12)", iconColor:"#9A9FB0" },
        ].map((item, i) => (
          <button key={i} aria-label={item.label} style={{
            flex:"1 1 0%",
            display:"flex", flexDirection:"column", alignItems:"center",
            gap:8, padding:"14px 0 12px",
            background: T.white, border:"none", borderRadius:12,
            boxShadow:"rgba(0,0,0,0.06) 0px 1px 6px",
            cursor:"pointer",
            transition:"transform 0.15s, box-shadow 0.15s",
          }}>
            <div style={{ color: item.iconColor }}>
              {item.icon}
            </div>
            <span style={{ fontSize:14, color:T.textBlack3, fontWeight:500 }}>{item.label}</span>
          </button>
        ))}
      </div>

      {/* ── 인기상품 섹션 ── */}
      <div style={{ padding:"8px 20px 0" }}>
        <div style={{ fontSize:15, fontWeight:700, color:T.textBlack1, marginBottom:16 }}>
          보면소득 인기상품
        </div>

        {/* _carousel_3rebp_132 */}
        <div style={{ position:"relative", padding:"10px 0 20px", height:320 }}>
          {popularItems.map((item, i) => (
            <CarouselCard
              key={i}
              item={item}
              offset={i - carouselIndex}
              onClick={() => setCarouselIndex(i)}
            />
          ))}
        </div>

      </div>

      {/* ── 상품 탐색 영역 ── */}
      <div style={{ background:T.white, borderRadius:"20px 20px 0 0", paddingTop:24 }}>
        <div style={{ padding:"0 20px 16px", fontSize:15, fontWeight:700, color:T.textBlack1 }}>
          보면소득에서 원하는 상품 찾아보기
        </div>

        {/* 가격 탭 (_priceFilterWrap_ + _priceTab_3rebp_208) */}
        <div style={{
          display:"flex", margin:"0 20px",
          background: T.bgGray3,
          borderRadius: T.radiusMd,
          padding:3,
        }}>
          {priceRanges.map(p => (
            <button key={p} onClick={() => { setActivePrice(p); setShowMore(false); }} style={{
              /* _priceTab_3rebp_208 */
              flex:"1 1 0%",
              height:34,
              borderRadius:6,
              fontSize:13,
              fontWeight: activePrice === p ? 600 : 500,
              whiteSpace:"nowrap",
              color: activePrice === p ? T.textBlack1 : T.textGray1,
              border:"none",
              cursor:"pointer",
              transition:"0.25s",
              /* _priceTabActive_3rebp_220 */
              background:   activePrice === p ? T.white       : "transparent",
              boxShadow:    activePrice === p ? "rgba(0,0,0,0.1) 0px 1px 4px" : "none",
            }}>
              {p}
            </button>
          ))}
        </div>

        {/* 카테고리 탭 (_categoryFilterWrap_ + _categoryTab_3rebp_243) */}
        <div style={{
          display:"flex", gap:4, padding:"0 20px", marginTop:14,
          borderBottom:`1px solid ${T.lineGray3}`,
          overflowX:"auto", scrollbarWidth:"none",
        }}>
          {categories.map(c => (
            <button key={c} onClick={() => { setActiveCategory(c); setShowMore(false); }} style={{
              /* _categoryTab_3rebp_243 */
              flexShrink:0,
              position:"relative",
              padding:"8px 12px 10px",
              fontSize:13,
              fontWeight: activeCategory === c ? 700 : 500,
              whiteSpace:"nowrap",
              color: activeCategory === c ? T.textBlack1 : T.textGray3,
              background:"transparent",
              border:"none",
              borderBottom: activeCategory === c ? `2px solid ${T.blue}` : "2px solid transparent",
              cursor:"pointer",
              transition:"color 0.2s",
              marginBottom:-1,
            }}>
              {c}
            </button>
          ))}
        </div>

        {/* 상품 그리드 (_productGrid_3rebp_277) */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(3, minmax(0, 1fr))",
          gap:"14px 10px",
          padding:"16px 20px 0",
        }}>
          {displayed.length > 0 ? displayed.map(p => (
            <ProductCard key={p.id} product={p} />
          )) : (
            /* _emptyState_3rebp_381 */
            <div style={{
              gridColumn:"1/-1", display:"flex", alignItems:"center",
              justifyContent:"center", padding:"40px 20px",
              color:T.textGray3, fontSize:14,
            }}>
              해당 조건의 상품이 없습니다
            </div>
          )}
        </div>

        {/* MORE 버튼 (_moreButton_3rebp_350) */}
        {filtered.length > 6 && (
          <div style={{ paddingBottom:32, marginTop:20, display:"flex", justifyContent:"center" }}>
            <button onClick={() => setShowMore(!showMore)} style={{
              display:"flex", alignItems:"center", justifyContent:"center", gap:4,
              width:160, height:40,
              borderRadius: T.radiusFull,
              background: T.white,
              border:`1px solid ${T.lineGray1}`,
              fontSize:14, fontWeight:500,
              color:T.textBlack3,
              cursor:"pointer",
              transition:"background-color 0.15s",
            }}>
              {showMore ? "접기" : "MORE"}
              {/* _moreArrow_3rebp_371 */}
              <span style={{
                display:"inline-block",
                width:8, height:8,
                borderRight:`1.5px solid #a3a3a3`,
                borderBottom:`1.5px solid #a3a3a3`,
                transform: showMore ? "rotate(-135deg) translateY(2px)" : "rotate(45deg)",
                marginTop: showMore ? 2 : -3,
                transition:"transform 0.25s",
              }} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
