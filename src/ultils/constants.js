export const imageURL = {
  banner_01: "https://www.mioto.vn/static/media/bg-landingpage-3.6011c96f.png",
};
export const advantageMiAUTO = [
  {
    img: "https://www.mioto.vn/static/media/dich_vu_thue_xe_tu_lai_hanoi.f177339e.svg",
    title: "An tâm đặt xe",
    content:
      "Không tính phí huỷ chuyến trong vòng 1h sau khi đặt cọc. Hoàn cọc 100% nếu chủ xe huỷ chuyến trong vòng 7 ngày trước chuyến đi",
  },
  {
    img: "https://www.mioto.vn/static/media/cho_thue_xe_tu_lai_tphcm.1e7cb1c7.svg",
    title: "Thủ tục đơn giản",
    content:
      "Chỉ cần có CCCD gắn chip (Hoặc Passport) & Giấy phép lái xe là bạn đã đủ điều kiện thuê xe trên Mioto.",
  },
  {
    img: "https://www.mioto.vn/static/media/cho_thue_xe_tu_lai_hanoi.735438af.svg",
    title: "Thanh toán đơn giản",
    content: "Đa dạng hình thức thanh toán: ATM, thẻ Visa & Ví điện tử.",
  },
  {
    img: "https://www.mioto.vn/static/media/thue_xe_tu_lai_gia_re_hcm.ffd1319e.svg",
    title: "Giao xe tận nơi",
    content: "Bạn có thể lựa chọn giao xe tận nhà/sân bay...",
  },
  {
    img: "https://www.mioto.vn/static/media/thue_xe_tu_lai_gia_re_hanoi.4035317e.svg",
    title: "Dòng xe đa dạng",
    content:
      "Hơn 100 dòng xe cho bạn tuỳ ý lựa chọn: Mini, Sedan, CUV, SUV, MPV, Bán tải.",
  },
  {
    img: "https://www.mioto.vn/static/media/thue_xe_co_tai_xe.a6f7dc54.svg",
    title: "Lái xe an toàn",
    content: "Vững tay lái với gói bảo hiểm thuê xe từ các nhà bảo hiểm.",
  },
];
// Minimum eight characters, at least one letter, one number and one special character.
export const regexPassword =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g;

export const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

export const filterList = [
  {
    id: 1,
    label: "Loại xe",
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.15 15.7199H19.6C20.51 15.7199 21.24 14.8599 21.24 13.8399V12.4499C21.24 11.7199 20.86 11.0399 20.27 10.7399L18.79 9.96995L17.47 7.59994C17.09 6.90994 16.42 6.49994 15.71 6.50994H10.12C9.47 6.50994 8.86 6.84995 8.47 7.42995L6.77 9.93994L3.96 10.7999C3.24 11.0199 2.75 11.7599 2.75 12.5999V13.8299C2.75 14.8499 3.48 15.7099 4.39 15.7099H4.63" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.87 15.7197H14.77" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.69 17.4598C7.83322 17.4598 8.76 16.5331 8.76 15.3898C8.76 14.2466 7.83322 13.3198 6.69 13.3198C5.54677 13.3198 4.62 14.2466 4.62 15.3898C4.62 16.5331 5.54677 17.4598 6.69 17.4598Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.08 17.4598C18.2232 17.4598 19.15 16.5331 19.15 15.3898C19.15 14.2466 18.2232 13.3198 17.08 13.3198C15.9368 13.3198 15.01 14.2466 15.01 15.3898C15.01 16.5331 15.9368 17.4598 17.08 17.4598Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
  },
  {
    id: 2,
    label: "Hãng xe",
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 11.9998C21.25 14.3198 20.39 16.4598 18.97 18.0698C17.55 19.6998 15.57 20.8298 13.33 21.1398C12.9 21.2098 12.46 21.2398 12 21.2398C11.54 21.2398 11.11 21.2098 10.67 21.1398C8.43 20.8298 6.45 19.6998 5.03 18.0698C3.61 16.4598 2.75 14.3198 2.75 11.9998C2.75 9.67977 3.61 7.53977 5.03 5.92977C6.45 4.29977 8.43 3.16977 10.67 2.85977C11.1 2.78977 11.54 2.75977 12 2.75977C12.46 2.75977 12.89 2.78977 13.33 2.85977C15.57 3.16977 17.55 4.29977 18.97 5.92977C20.39 7.53977 21.25 9.67977 21.25 11.9998Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.67 21.1496C11.03 20.4796 8 17.1696 8 11.9996C8 6.82961 11.03 3.51961 11.67 2.84961" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.33 21.1496C12.97 20.4796 16 17.1696 16 11.9996C16 6.82961 12.97 3.51961 12.33 2.84961" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.75 12H21.25" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
  },
  {
    id: 3,
    label: "Chủ xe 5 sao",
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.3502 5.51906L16.3502 8.37906C15.8202 8.75906 15.0602 8.52906 14.8302 7.91906L12.9402 2.87906C12.6202 2.00906 11.3902 2.00906 11.0702 2.87906L9.17022 7.90906C8.94022 8.52906 8.19022 8.75906 7.66022 8.36906L3.66022 5.50906C2.86022 4.94906 1.80022 5.73906 2.13022 6.66906L6.29022 18.3191C6.43022 18.7191 6.81022 18.9791 7.23022 18.9791H16.7602C17.1802 18.9791 17.5602 18.7091 17.7002 18.3191L21.8602 6.66906C22.2002 5.73906 21.1402 4.94906 20.3502 5.51906Z" stroke="black"></path><path d="M7 21.5H17" stroke="black" stroke-linecap="round"></path><path d="M9 13H15" stroke="black" stroke-linecap="round"></path></svg>',
  },
  {
    id: 4,
    label: "Miễn thế chấp",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15.8373 9.59766H7V15.3032C7 16.2427 7.76302 17 8.69685 17H15.8316C16.7712 17 17.5285 16.237 17.5285 15.3032V11.3002C17.5342 10.3607 16.7712 9.59766 15.8373 9.59766Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 10.7615V7.93155C7 7.41707 7.41707 7 7.93155 7H13.5209C14.5498 7 15.384 7.83414 15.384 8.86311V9.54756" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 13.3H15.009" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 23.5001C5.6487 23.5001 0.5 18.3514 0.5 12.0001C0.5 9.05437 1.60686 6.36837 3.42816 4.33346C5.5346 1.97995 8.59412 0.5 12 0.5C18.3513 0.5 23.5 5.64878 23.5 12.0001C23.5 15.4347 21.9949 18.5172 19.6067 20.6251C17.5791 22.4148 14.9169 23.5001 12 23.5001Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.50008 6.5L3.54456 4.5M17.4492 18.5L19.44 20.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
  },
  {
    id: 5,
    label: "Bảo hiểm chuyến đi",
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.65372 3.63C9.89372 3.29813 11.2114 3 12 3C12.7886 3 14.1063 3.29813 15.3463 3.63C16.6149 3.9675 17.8937 4.36687 18.6457 4.60875C18.9601 4.71096 19.2389 4.8984 19.4499 5.14954C19.661 5.40068 19.7958 5.70533 19.8389 6.0285C20.52 11.0651 18.9394 14.7979 17.0217 17.2672C16.2085 18.3236 15.2388 19.2538 14.1451 20.0269C13.767 20.2944 13.3663 20.5296 12.9474 20.73C12.6274 20.8785 12.2834 21 12 21C11.7166 21 11.3737 20.8785 11.0526 20.73C10.6337 20.5296 10.233 20.2944 9.85486 20.0269C8.76118 19.2538 7.79153 18.3236 6.97829 17.2672C5.06058 14.7979 3.48001 11.0651 4.16115 6.0285C4.20422 5.70533 4.33903 5.40068 4.55008 5.14954C4.76114 4.8984 5.03988 4.71096 5.35429 4.60875C6.44594 4.25641 7.54607 3.93007 8.65372 3.63Z" stroke="black"></path><path d="M11.3333 12.6666L9.5 10.8333" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.9997 9L11.333 12.6667" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
  },
  {
    id: 6,
    label: "Giao xe tận nơi",
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.50511 8.86499H4.80511C3.66511 8.86499 2.74512 9.78499 2.74512 10.925V18.115C2.74512 19.255 3.66511 20.175 4.80511 20.175H19.1951C20.3351 20.175 21.2551 19.255 21.2551 18.115V10.925" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.1154 8.86499H10.2754" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.1152 16.0549H19.1952C20.3352 16.0549 21.2552 16.9749 21.2552 18.1149C21.2552 19.2549 20.3352 20.1749 19.1952 20.1749H16.1152" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.1152 5.7749H19.1952C20.3352 5.7749 21.2552 6.6949 21.2552 7.8349" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.2549 18.115V7.83496" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.1152 5.7749V16.0549" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.75488 14.0049H6.86488C7.43488 14.0049 7.89488 14.3949 7.89488 14.8849C7.89488 15.3749 8.35488 15.7649 8.92488 15.7649H9.95488C10.5249 15.7649 10.9849 16.1549 10.9849 16.6449V17.5249V20.1649" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.40495 3.82495C6.98495 3.82495 5.83496 4.97495 5.83496 6.39495C5.83496 8.15495 8.13495 10.735 8.23495 10.845C8.32495 10.945 8.48497 10.945 8.57497 10.845C8.67497 10.735 10.975 8.15495 10.975 6.39495C10.975 4.97495 9.82495 3.82495 8.40495 3.82495Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.40562 7.37497C8.89716 7.37497 9.29562 6.9765 9.29562 6.48497C9.29562 5.99344 8.89716 5.59497 8.40562 5.59497C7.91409 5.59497 7.51562 5.99344 7.51562 6.48497C7.51562 6.9765 7.91409 7.37497 8.40562 7.37497Z" fill="black"></path></svg>',
  },
  {
    id: 7,
    label: "Xe giảm giá",
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.93 11.2399L18.9 9.20988V6.24988C18.9 5.60988 18.39 5.09988 17.75 5.09988H14.79L12.76 3.06988C12.34 2.64988 11.66 2.64988 11.24 3.06988L9.21 5.09988H6.25C5.61 5.09988 5.1 5.60988 5.1 6.24988V9.20988L3.07 11.2399C2.65 11.6599 2.65 12.3399 3.07 12.7599L5.1 14.7899V17.7499C5.1 18.3899 5.61 18.8999 6.25 18.8999H9.21L11.24 20.9299C11.66 21.3499 12.34 21.3499 12.76 20.9299L14.79 18.8999H17.75C18.39 18.8999 18.9 18.3799 18.9 17.7499V14.7899L20.93 12.7599C21.36 12.3399 21.36 11.6599 20.93 11.2399Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.44 9.55981L9.56 14.4398" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.294 14.9998H15.303" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.00006 8.99976H9.00904" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
  },
  {
    id: 8,
    label: "Xe điện",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19.15 19.7199H19.6C20.51 19.7199 21.24 18.8599 21.24 17.8399V16.4499C21.24 15.7199 20.86 15.0399 20.27 14.7399L18.79 13.9699L17.47 11.5999C17.09 10.9099 16.42 10.4999 15.71 10.5099H10.12C9.47 10.5099 8.86 10.8499 8.47 11.4299L6.77 13.9399L3.96 14.7999C3.24 15.0199 2.75 15.7599 2.75 16.5999V17.8299C2.75 18.8499 3.48 19.7099 4.39 19.7099H4.63" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.87012 19.72H14.7701" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.69012 21.4598C7.83335 21.4598 8.76012 20.5331 8.76012 19.3898C8.76012 18.2466 7.83335 17.3198 6.69012 17.3198C5.54689 17.3198 4.62012 18.2466 4.62012 19.3898C4.62012 20.5331 5.54689 21.4598 6.69012 21.4598Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.0798 21.4598C18.223 21.4598 19.1498 20.5331 19.1498 19.3898C19.1498 18.2466 18.223 17.3198 17.0798 17.3198C15.9365 17.3198 15.0098 18.2466 15.0098 19.3898C15.0098 20.5331 15.9365 21.4598 17.0798 21.4598Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 7.5H5.5V2.5H8C9.38068 2.5 10.5 3.61932 10.5 5C10.5 6.38068 9.38068 7.5 8 7.5Z" stroke="black"></path><path d="M5.5 3.5H3" stroke="black" stroke-linecap="round"></path><path d="M5.5 6.5H3" stroke="black" stroke-linecap="round"></path><path d="M20 10V5H11" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 13L11 15H13L12 17" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
  },
  {
    id: 9,
    label: "Truyền động",
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="6" r="1.5" stroke="black"></circle><circle cx="18" cy="18" r="1.5" stroke="black"></circle><circle cx="12" cy="6" r="1.5" stroke="black"></circle><circle cx="12" cy="18" r="1.5" stroke="black"></circle><circle cx="6" cy="6" r="1.5" stroke="black"></circle><path d="M7.57715 20V16H5.99902C5.69694 16 5.43913 16.054 5.22559 16.1621C5.01074 16.2689 4.84733 16.4206 4.73535 16.6172C4.62207 16.8125 4.56543 17.0423 4.56543 17.3066C4.56543 17.5723 4.62272 17.8008 4.7373 17.9922C4.85189 18.1823 5.0179 18.3281 5.23535 18.4297C5.4515 18.5312 5.71322 18.582 6.02051 18.582H7.07715V17.9023H6.15723C5.99577 17.9023 5.86165 17.8802 5.75488 17.8359C5.64811 17.7917 5.56868 17.7253 5.5166 17.6367C5.46322 17.5482 5.43652 17.4382 5.43652 17.3066C5.43652 17.1738 5.46322 17.0618 5.5166 16.9707C5.56868 16.8796 5.64876 16.8105 5.75684 16.7637C5.86361 16.7155 5.99837 16.6914 6.16113 16.6914H6.73145V20H7.57715ZM5.41699 18.1797L4.42285 20H5.35645L6.3291 18.1797H5.41699Z" fill="black"></path><path d="M18 8V12M18 16V12M12 8V16M6 8V11.5C6 11.7761 6.22386 12 6.5 12H18" stroke="black" stroke-linecap="round"></path></svg>',
  },
];
