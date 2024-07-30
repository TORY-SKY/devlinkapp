import "../index.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="navigation-bar-container">
        <nav>
          {/* logo */}
          <div className="app-logo-container">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.61875 27.38C6.57341 29.3334 9.71475 29.3334 16.0001 29.3334C22.2854 29.3334 25.4281 29.3334 27.3801 27.38C29.3334 25.4294 29.3334 22.2854 29.3334 16C29.3334 9.71469 29.3334 6.57202 27.3801 4.61869C25.4294 2.66669 22.2854 2.66669 16.0001 2.66669C9.71475 2.66669 6.57208 2.66669 4.61875 4.61869C2.66675 6.57335 2.66675 9.71469 2.66675 16C2.66675 22.2854 2.66675 25.428 4.61875 27.38ZM12.6667 11.6667C11.8097 11.6667 10.9719 11.9208 10.2593 12.397C9.54666 12.8731 8.99125 13.5499 8.66327 14.3417C8.33529 15.1335 8.24948 16.0048 8.41668 16.8454C8.58388 17.686 8.99659 18.4581 9.60262 19.0641C10.2086 19.6702 10.9808 20.0829 11.8214 20.2501C12.6619 20.4173 13.5332 20.3315 14.325 20.0035C15.1169 19.6755 15.7936 19.1201 16.2698 18.4075C16.7459 17.6949 17.0001 16.8571 17.0001 16C17.0001 15.7348 17.1054 15.4804 17.293 15.2929C17.4805 15.1054 17.7349 15 18.0001 15C18.2653 15 18.5197 15.1054 18.7072 15.2929C18.8947 15.4804 19.0001 15.7348 19.0001 16C19.0001 17.2526 18.6286 18.4771 17.9327 19.5186C17.2368 20.5601 16.2477 21.3719 15.0904 21.8513C13.9331 22.3306 12.6597 22.456 11.4312 22.2117C10.2026 21.9673 9.07414 21.3641 8.18841 20.4784C7.30267 19.5926 6.69948 18.4641 6.45511 17.2356C6.21073 16.007 6.33616 14.7336 6.81551 13.5764C7.29487 12.4191 8.10663 11.43 9.14814 10.734C10.1896 10.0381 11.4141 9.66669 12.6667 9.66669C12.932 9.66669 13.1863 9.77204 13.3739 9.95958C13.5614 10.1471 13.6667 10.4015 13.6667 10.6667C13.6667 10.9319 13.5614 11.1863 13.3739 11.3738C13.1863 11.5613 12.932 11.6667 12.6667 11.6667ZM23.6667 16C23.6667 17.1493 23.2102 18.2515 22.3975 19.0641C21.5849 19.8768 20.4827 20.3334 19.3334 20.3334C19.0682 20.3334 18.8138 20.4387 18.6263 20.6262C18.4388 20.8138 18.3334 21.0681 18.3334 21.3334C18.3334 21.5986 18.4388 21.8529 18.6263 22.0405C18.8138 22.228 19.0682 22.3334 19.3334 22.3334C20.586 22.3334 21.8105 21.9619 22.852 21.266C23.8935 20.5701 24.7053 19.5809 25.1847 18.4237C25.664 17.2664 25.7894 15.993 25.5451 14.7644C25.3007 13.5359 24.6975 12.4074 23.8118 11.5217C22.926 10.6359 21.7975 10.0328 20.569 9.78838C19.3404 9.54401 18.067 9.66943 16.9098 10.1488C15.7525 10.6281 14.7634 11.4399 14.0674 12.4814C13.3715 13.5229 13.0001 14.7474 13.0001 16C13.0001 16.2652 13.1054 16.5196 13.293 16.7071C13.4805 16.8947 13.7349 17 14.0001 17C14.2653 17 14.5197 16.8947 14.7072 16.7071C14.8947 16.5196 15.0001 16.2652 15.0001 16C15.0001 14.8507 15.4566 13.7485 16.2693 12.9359C17.0819 12.1232 18.1841 11.6667 19.3334 11.6667C20.4827 11.6667 21.5849 12.1232 22.3975 12.9359C23.2102 13.7485 23.6667 14.8507 23.6667 16Z"
                fill="#633CFF"
              />
            </svg>
            <p className="appName logo-text">devlinks</p>
          </div>
          <nav className="links-container">
            <Link to="/" className="links">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.1537 14.6509C11.2411 14.738 11.3105 14.8415 11.3578 14.9554C11.4051 15.0694 11.4295 15.1916 11.4295 15.3149C11.4295 15.4383 11.4051 15.5605 11.3578 15.6745C11.3105 15.7884 11.2411 15.8919 11.1537 15.979L10.6897 16.4431C9.81033 17.3224 8.61766 17.8164 7.37406 17.8164C6.13046 17.8164 4.93779 17.3224 4.05844 16.4431C3.17908 15.5637 2.68506 14.371 2.68506 13.1274C2.68506 11.8838 3.17908 10.6912 4.05844 9.81181L5.94281 7.92822C6.78772 7.08122 7.92451 6.58933 9.12033 6.55331C10.3161 6.51729 11.4805 6.93986 12.3748 7.73447C12.4672 7.81655 12.5424 7.91601 12.5963 8.02717C12.6502 8.13833 12.6817 8.25902 12.689 8.38235C12.6962 8.50568 12.6791 8.62923 12.6386 8.74595C12.5981 8.86266 12.535 8.97026 12.453 9.06259C12.3709 9.15493 12.2714 9.2302 12.1603 9.28409C12.0491 9.33799 11.9284 9.36947 11.8051 9.37672C11.6818 9.38398 11.5582 9.36687 11.4415 9.32638C11.3248 9.28588 11.2172 9.2228 11.1248 9.14072C10.5885 8.66441 9.89049 8.41102 9.17352 8.43237C8.45656 8.45371 7.77483 8.74819 7.26781 9.25556L5.385 11.1368C4.85747 11.6643 4.5611 12.3798 4.5611 13.1259C4.5611 13.8719 4.85747 14.5874 5.385 15.1149C5.91253 15.6425 6.62802 15.9388 7.37406 15.9388C8.1201 15.9388 8.83559 15.6425 9.36312 15.1149L9.82719 14.6509C9.91425 14.5637 10.0176 14.4946 10.1315 14.4474C10.2453 14.4002 10.3673 14.3759 10.4905 14.3759C10.6137 14.3759 10.7357 14.4002 10.8495 14.4474C10.9633 14.4946 11.0667 14.5637 11.1537 14.6509ZM16.9412 3.55713C16.0612 2.67912 14.8688 2.18604 13.6256 2.18604C12.3825 2.18604 11.1901 2.67912 10.31 3.55713L9.84594 4.02119C9.66982 4.19731 9.57087 4.43618 9.57087 4.68525C9.57087 4.93432 9.66982 5.17319 9.84594 5.34931C10.0221 5.52543 10.2609 5.62438 10.51 5.62438C10.7591 5.62438 10.9979 5.52543 11.1741 5.34931L11.6381 4.88525C12.1657 4.35772 12.8811 4.06135 13.6272 4.06135C14.3732 4.06135 15.0887 4.35772 15.6162 4.88525C16.1438 5.41278 16.4401 6.12827 16.4401 6.87431C16.4401 7.62036 16.1438 8.33584 15.6162 8.86338L13.7327 10.7478C13.2252 11.2549 12.5431 11.549 11.8259 11.5697C11.1088 11.5905 10.4108 11.3364 9.87484 10.8595C9.78251 10.7774 9.67491 10.7143 9.55819 10.6738C9.44148 10.6333 9.31793 10.6162 9.1946 10.6235C9.07127 10.6307 8.95058 10.6622 8.83942 10.7161C8.72825 10.77 8.62879 10.8453 8.54672 10.9376C8.46464 11.0299 8.40156 11.1375 8.36106 11.2542C8.32057 11.371 8.30346 11.4945 8.31072 11.6178C8.31797 11.7412 8.34944 11.8619 8.40334 11.973C8.45724 12.0842 8.53251 12.1836 8.62484 12.2657C9.51858 13.0601 10.6821 13.483 11.8774 13.4477C13.0726 13.4124 14.2092 12.9217 15.0545 12.0759L16.9389 10.1923C17.8179 9.31242 18.3119 8.1197 18.3123 6.87597C18.3128 5.63224 17.8197 4.43917 16.9412 3.55869V3.55713Z"
                  fill="#633CFF"
                />
              </svg>
              <p className="logo-text">Links</p>
            </Link>
            <div className="links">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 1.5625C8.83122 1.5625 7.19992 2.05735 5.81238 2.98448C4.42484 3.9116 3.34338 5.22936 2.70477 6.77111C2.06616 8.31286 1.89907 10.0094 2.22463 11.6461C2.55019 13.2828 3.35379 14.7862 4.53379 15.9662C5.7138 17.1462 7.21721 17.9498 8.85393 18.2754C10.4906 18.6009 12.1871 18.4338 13.7289 17.7952C15.2706 17.1566 16.5884 16.0752 17.5155 14.6876C18.4427 13.3001 18.9375 11.6688 18.9375 10C18.935 7.763 18.0453 5.61833 16.4635 4.03653C14.8817 2.45473 12.737 1.56498 10.5 1.5625ZM6.71641 15.357C7.15163 14.7619 7.72107 14.2779 8.37849 13.9442C9.0359 13.6106 9.76276 13.4367 10.5 13.4367C11.2373 13.4367 11.9641 13.6106 12.6215 13.9442C13.2789 14.2779 13.8484 14.7619 14.2836 15.357C13.1778 16.1412 11.8556 16.5625 10.5 16.5625C9.14436 16.5625 7.82221 16.1412 6.71641 15.357ZM8.3125 9.375C8.3125 8.94235 8.4408 8.51942 8.68116 8.15969C8.92153 7.79996 9.26317 7.51958 9.66288 7.35401C10.0626 7.18845 10.5024 7.14513 10.9268 7.22953C11.3511 7.31394 11.7409 7.52228 12.0468 7.8282C12.3527 8.13413 12.5611 8.52391 12.6455 8.94824C12.7299 9.37257 12.6866 9.81241 12.521 10.2121C12.3554 10.6118 12.075 10.9535 11.7153 11.1938C11.3556 11.4342 10.9327 11.5625 10.5 11.5625C9.91984 11.5625 9.36344 11.332 8.95321 10.9218C8.54297 10.5116 8.3125 9.95516 8.3125 9.375ZM15.6563 14.0578C15.0486 13.2849 14.2741 12.6595 13.3906 12.2281C13.9537 11.658 14.3355 10.934 14.4881 10.1474C14.6408 9.36074 14.5573 8.54653 14.2484 7.80718C13.9394 7.06783 13.4187 6.43637 12.7517 5.99223C12.0847 5.5481 11.3013 5.31112 10.5 5.31112C9.69869 5.31112 8.91528 5.5481 8.24831 5.99223C7.58135 6.43637 7.06062 7.06783 6.75165 7.80718C6.44267 8.54653 6.35925 9.36074 6.51187 10.1474C6.66449 10.934 7.04634 11.658 7.60938 12.2281C6.72592 12.6595 5.9514 13.2849 5.34375 14.0578C4.58051 13.0903 4.10512 11.9274 3.972 10.7022C3.83888 9.47711 4.05341 8.23925 4.59104 7.13037C5.12867 6.02148 5.96767 5.08639 7.01199 4.43212C8.05631 3.77786 9.26375 3.43086 10.4961 3.43086C11.7284 3.43086 12.9359 3.77786 13.9802 4.43212C15.0245 5.08639 15.8635 6.02148 16.4012 7.13037C16.9388 8.23925 17.1533 9.47711 17.0202 10.7022C16.8871 11.9274 16.4117 13.0903 15.6484 14.0578H15.6563Z"
                  fill="#737373"
                />
              </svg>
              <p className="logo-text">Profile Details</p>
            </div>
          </nav>
          {/* <button className="preview-btn">Preview</button> */}
          <button className="preview-btn">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.6096 9.61953C19.5807 9.55625 18.8963 8.03672 17.3846 6.525C15.3619 4.50547 12.8127 3.4375 10.0002 3.4375C7.18769 3.4375 4.63847 4.50547 2.61815 6.525C1.10643 8.03672 0.42206 9.55625 0.39081 9.61953C0.337882 9.73953 0.310547 9.86924 0.310547 10.0004C0.310547 10.1315 0.337882 10.2613 0.39081 10.3813C0.419716 10.4453 1.10409 11.9641 2.61659 13.4758C4.63847 15.4953 7.18769 16.5625 10.0002 16.5625C12.8127 16.5625 15.3619 15.4953 17.3814 13.4758C18.8939 11.9641 19.5783 10.4453 19.6072 10.3813C19.6605 10.2614 19.6882 10.1318 19.6887 10.0006C19.6891 9.86949 19.6621 9.73969 19.6096 9.61953ZM16.0111 12.1977C14.3338 13.8492 12.3119 14.6875 10.0002 14.6875C7.68847 14.6875 5.66659 13.8492 3.99159 12.1969C3.33249 11.5447 2.76553 10.8056 2.30643 10C2.76566 9.19474 3.33261 8.45589 3.99159 7.80391C5.66737 6.15078 7.68847 5.3125 10.0002 5.3125C12.3119 5.3125 14.333 6.15078 16.0088 7.80391C16.6678 8.45583 17.2348 9.19469 17.6939 10C17.2348 10.8055 16.6678 11.5447 16.0088 12.1969L16.0111 12.1977ZM10.0002 6.5625C9.32031 6.5625 8.65571 6.76411 8.09041 7.14182C7.52512 7.51954 7.08453 8.0564 6.82435 8.68453C6.56417 9.31265 6.4961 10.0038 6.62874 10.6706C6.76137 11.3374 7.08876 11.9499 7.56951 12.4307C8.05025 12.9114 8.66275 13.2388 9.32956 13.3714C9.99637 13.5041 10.6875 13.436 11.3157 13.1758C11.9438 12.9157 12.4806 12.4751 12.8584 11.9098C13.2361 11.3445 13.4377 10.6799 13.4377 10C13.4367 9.08864 13.0742 8.21489 12.4297 7.57046C11.7853 6.92603 10.9115 6.56353 10.0002 6.5625ZM10.0002 11.5625C9.69115 11.5625 9.38906 11.4709 9.13211 11.2992C8.87515 11.1275 8.67488 10.8835 8.55662 10.5979C8.43836 10.3124 8.40742 9.99827 8.46771 9.69517C8.528 9.39208 8.67681 9.11367 8.89533 8.89515C9.11385 8.67663 9.39226 8.52781 9.69536 8.46752C9.99845 8.40723 10.3126 8.43818 10.5981 8.55644C10.8836 8.6747 11.1277 8.87497 11.2994 9.13192C11.471 9.38887 11.5627 9.69097 11.5627 10C11.5627 10.4144 11.3981 10.8118 11.105 11.1049C10.812 11.3979 10.4146 11.5625 10.0002 11.5625Z"
                fill="#633CFF"
              />
            </svg>
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
