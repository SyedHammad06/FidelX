import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from '../Button/Button';
import './Services.scss';

interface Props {}

export const Services: React.FC<Props> = (): JSX.Element => {
  return (
    <div className='Services'>
      <hr className='Services__vertical-line' />
      <h2 className='Services__heading' data-aos='fade-in'>
        Services we provide
      </h2>
      <div className='Services__card-container'>
        <div className='Services__col-1'>
          <div
            className='Services__card Services__card-1'
            data-aos='fade-right'
          >
            <div className='Services__text'>
              <h2 className='Services__sub-heading'>Web Development</h2>
              <p className='Services__info'>
                Responsive design and elegant websites, couldn't be made easier
                with advancement in technology.
              </p>
            </div>
            <div className='Services__icons-box'>
              <svg
                className='Services__icon'
                width='81'
                height='81'
                viewBox='0 0 81 81'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M79.5762 43.8585L63.9141 64.4049C62.9648 65.3005 61.8179 65.7483 60.4731 65.7483C59.1284 65.7483 57.9814 65.2873 57.0322 64.3654C56.083 63.4434 55.6084 62.3107 55.6084 60.9673C55.6084 59.6239 56.083 58.478 57.0322 57.5298L70.084 40.4605L57.0322 23.3912C56.083 22.4429 55.6084 21.3102 55.6084 19.9932C55.6084 18.6761 56.083 17.5434 57.0322 16.5951C57.9814 15.6468 59.1284 15.1727 60.4731 15.1727C61.8179 15.1727 62.9648 15.6468 63.9141 16.5951L79.5762 37.0624C80.5254 38.0107 81 39.1434 81 40.4605C81 41.7776 80.5254 42.9102 79.5762 43.8585ZM40.5 75.9424C40.4473 76.1005 40.3682 76.4034 40.2627 76.8512C40.1572 77.299 40.0781 77.602 40.0254 77.76L39.7485 78.5898L39.353 79.4195L38.7598 80.0517L37.9292 80.6049L36.8613 80.8815L35.4375 81C34.1719 81 32.959 80.3415 31.7988 79.0244C30.6387 77.7073 30.2168 76.4429 30.5332 75.2312L40.5 5.05756C41.3965 1.68585 43.9277 0 48.0938 0C49.2539 0 50.0317 0.619024 50.4272 1.85707C50.8228 3.09512 50.8359 4.39902 50.4668 5.76878L40.5 75.9424ZM23.9678 64.3654C23.0186 65.2873 21.8716 65.7483 20.5269 65.7483C19.1821 65.7483 18.0352 65.3005 17.0859 64.4049L1.42383 43.8585C0.474609 42.9102 0 41.7776 0 40.4605C0 39.1434 0.474609 38.0107 1.42383 37.0624L17.0859 16.5951C18.0352 15.6468 19.1821 15.1727 20.5269 15.1727C21.8716 15.1727 23.0186 15.6468 23.9678 16.5951C24.917 17.5434 25.3916 18.6761 25.3916 19.9932C25.3916 21.3102 24.917 22.4429 23.9678 23.3912L10.916 40.4605L23.9678 57.5298C24.917 58.478 25.3916 59.6239 25.3916 60.9673C25.3916 62.3107 24.917 63.4434 23.9678 64.3654Z'
                  fill='black'
                />
              </svg>
            </div>
          </div>
          <div
            className='Services__card Services__card-2'
            data-aos='fade-right'
          >
            <div className='Services__text'>
              <h2 className='Services__sub-heading'>App Development</h2>
              <p className='Services__info'>
                Apps go hand in hand with websites for a good company. A study
                has shown people prefer apps over websites. Hence they are in
                huge demand.
              </p>
            </div>
            <div className='Services__icons-box'>
              <svg
                className='Services__icon'
                width='51'
                height='81'
                viewBox='0 0 51 81'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M40.6875 5.0625C42.0302 5.0625 43.3178 5.59587 44.2672 6.54527C45.2166 7.49467 45.75 8.78234 45.75 10.125V70.875C45.75 72.2177 45.2166 73.5053 44.2672 74.4547C43.3178 75.4041 42.0302 75.9375 40.6875 75.9375H10.3125C8.96984 75.9375 7.68218 75.4041 6.73277 74.4547C5.78337 73.5053 5.25 72.2177 5.25 70.875V10.125C5.25 8.78234 5.78337 7.49467 6.73277 6.54527C7.68218 5.59587 8.96984 5.0625 10.3125 5.0625H40.6875ZM10.3125 0C7.62718 0 5.05185 1.06674 3.15304 2.96554C1.25424 4.86435 0.1875 7.43968 0.1875 10.125V70.875C0.1875 73.5603 1.25424 76.1357 3.15304 78.0345C5.05185 79.9333 7.62718 81 10.3125 81H40.6875C43.3728 81 45.9481 79.9333 47.847 78.0345C49.7458 76.1357 50.8125 73.5603 50.8125 70.875V10.125C50.8125 7.43968 49.7458 4.86435 47.847 2.96554C45.9481 1.06674 43.3728 0 40.6875 0L10.3125 0Z'
                  fill='black'
                />
                <path
                  d='M25.5 70.875C26.8427 70.875 28.1303 70.3416 29.0797 69.3922C30.0291 68.4428 30.5625 67.1552 30.5625 65.8125C30.5625 64.4698 30.0291 63.1822 29.0797 62.2328C28.1303 61.2834 26.8427 60.75 25.5 60.75C24.1573 60.75 22.8697 61.2834 21.9203 62.2328C20.9709 63.1822 20.4375 64.4698 20.4375 65.8125C20.4375 67.1552 20.9709 68.4428 21.9203 69.3922C22.8697 70.3416 24.1573 70.875 25.5 70.875Z'
                  fill='black'
                />
              </svg>
            </div>
          </div>
          <div
            className='Services__card Services__card-3'
            data-aos='fade-right'
          >
            <div className='Services__text'>
              <h2 className='Services__sub-heading'>SEO Management</h2>
              <p className='Services__info'>
                Want to rank your websites higher in the google search results?
                SEO is the way to go. Beat your competition by ranking higher.
              </p>
            </div>
            <div className='Services__icons-box'>
              <svg
                className='Services__icon'
                width='81'
                height='81'
                viewBox='0 0 81 81'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M80.1307 76.4166L76.4166 80.2098C75.8898 80.6839 75.2576 80.921 74.52 80.921C73.7824 80.921 73.1502 80.6839 72.6234 80.2098L60.6907 68.1981C57.5298 69.9893 54.158 70.8849 50.5756 70.8849C44.9912 70.8849 40.2234 68.9093 36.2722 64.958C32.321 61.0068 30.3454 56.239 30.3454 50.6546C30.3454 45.0702 32.321 40.3024 36.2722 36.3512C40.2234 32.4 44.9912 30.4244 50.5756 30.4244C56.16 30.4244 60.9278 32.4 64.879 36.3512C68.8302 40.3024 70.8059 45.0702 70.8059 50.6546C70.8059 54.2371 69.9102 57.5824 68.119 60.6907L80.1307 72.7024C80.6576 73.2293 80.921 73.8483 80.921 74.5595C80.921 75.2707 80.6576 75.8898 80.1307 76.4166ZM50.6151 35.482C46.4268 35.482 42.8444 36.9571 39.8678 39.9073C36.8912 42.8576 35.4029 46.4268 35.4029 50.6151C35.4029 54.8034 36.8912 58.3859 39.8678 61.3624C42.8444 64.339 46.4268 65.8273 50.6151 65.8273C54.8034 65.8273 58.3727 64.339 61.3229 61.3624C64.2732 58.3859 65.7483 54.8034 65.7483 50.6151C65.7483 46.4268 64.2732 42.8576 61.3229 39.9073C58.3727 36.9571 54.8034 35.482 50.6151 35.482ZM55.6332 25.841V25.3668C55.6332 23.9444 56.1337 22.7459 57.1346 21.7712C58.1356 20.7966 59.321 20.3093 60.6907 20.3093H70.8059C72.2283 20.3093 73.44 20.7966 74.441 21.7712C75.4419 22.7459 75.9424 23.9444 75.9424 25.3668V50.6546H75.8634C75.8634 44.5961 73.9537 39.2356 70.1341 34.5732C66.3146 29.9107 61.481 27 55.6332 25.841ZM30.3454 35.482V15.2517C30.3454 13.8293 30.8459 12.6307 31.8468 11.6561C32.8478 10.6815 34.0332 10.1941 35.4029 10.1941H45.518C46.9405 10.1941 48.139 10.6815 49.1137 11.6561C50.0883 12.6307 50.5756 13.8293 50.5756 15.2517V25.3668C46.519 25.3668 42.7259 26.2756 39.1961 28.0932C35.6663 29.9107 32.7161 32.3737 30.3454 35.482ZM30.3454 65.7483C32.7161 68.9093 35.6663 71.3985 39.1961 73.2161C42.7259 75.0337 46.519 75.9424 50.5756 75.9424H55.6332C55.6332 77.3122 55.1459 78.4976 54.1712 79.4985C53.1966 80.4995 51.998 81 50.5756 81H5.05756C3.6878 81 2.50244 80.4995 1.50146 79.4985C0.500488 78.4976 0 77.299 0 75.9029C0 74.5068 0.487317 73.3215 1.46195 72.3468C2.43659 71.3722 3.63512 70.8849 5.05756 70.8849V5.05756C5.05756 3.6878 5.55805 2.50244 6.55902 1.50146C7.56 0.500488 8.74537 0 10.1151 0H20.2302C21.6527 0 22.8512 0.500488 23.8259 1.50146C24.8005 2.50244 25.2878 3.6878 25.2878 5.05756V70.8849H30.3454V65.7483Z'
                  fill='black'
                />
              </svg>
            </div>
          </div>
        </div>
        <div className='Services__col-2'>
          <div className='Services__card Services__card-4' data-aos='fade-left'>
            <div className='Services__text'>
              <h2 className='Services__sub-heading'>Graphic Designing</h2>
              <p className='Services__info'>
                Capture your target audience with a elegant yet minimal looking
                logos and design. All great companies have great graphic
                designs.
              </p>
            </div>
            <div className='Services__icons-box'>
              <svg
                className='Services__icon'
                width='71'
                height='71'
                viewBox='0 0 71 71'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M30.3751 50.4881C28.6201 50.2933 26.8939 49.8941 25.2316 49.2984C25.2822 48.1036 25.3126 46.8582 25.3126 45.5622V45.1572V43.8562C26.882 44.6054 28.5881 45.1269 30.3751 45.3851V32.906C30.3751 30.892 31.1752 28.9605 32.5993 27.5364C34.0234 26.1123 35.9549 25.3122 37.9689 25.3122H50.4479C50.0442 22.507 48.9735 19.8396 47.3256 17.5338C45.6777 15.228 43.5008 13.3512 40.9775 12.0608C38.4542 10.7704 35.6582 10.1041 32.8241 10.1178C29.99 10.1315 27.2006 10.8248 24.6899 12.1396C24.2895 10.4838 23.63 8.90172 22.7358 7.45175C26.0177 5.81365 29.6465 4.99223 33.3139 5.0573C36.9813 5.12237 40.5788 6.07201 43.8005 7.8255C47.0221 9.57899 49.7728 12.0845 51.8186 15.1289C53.8643 18.1734 55.1447 21.6668 55.5509 25.3122H63.2814C65.2953 25.3122 67.2268 26.1123 68.651 27.5364C70.0751 28.9605 70.8751 30.892 70.8751 32.906V58.2185C70.8751 60.2325 70.0751 62.164 68.651 63.5881C67.2268 65.0122 65.2953 65.8122 63.2814 65.8122H37.9689C35.9549 65.8122 34.0234 65.0122 32.5993 63.5881C31.1752 62.164 30.3751 60.2325 30.3751 58.2185V50.4881ZM55.5509 30.3747C54.9757 35.5111 52.6718 40.2995 49.0171 43.9542C45.3624 47.6089 40.574 49.9128 35.4376 50.4881V58.2185C35.4376 58.8898 35.7043 59.5337 36.179 60.0084C36.6537 60.4831 37.2975 60.7497 37.9689 60.7497H63.2814C63.9527 60.7497 64.5965 60.4831 65.0712 60.0084C65.5459 59.5337 65.8126 58.8898 65.8126 58.2185V32.906C65.8126 32.2347 65.5459 31.5908 65.0712 31.1161C64.5965 30.6414 63.9527 30.3747 63.2814 30.3747H55.5509ZM50.4479 30.3747H37.9689C37.2975 30.3747 36.6537 30.6414 36.179 31.1161C35.7043 31.5908 35.4376 32.2347 35.4376 32.906V45.3851C39.2242 44.8377 42.7322 43.0801 45.4376 40.3747C48.143 37.6694 49.9006 34.1614 50.4479 30.3747Z'
                  fill='black'
                />
                <path
                  d='M19.2122 33.2143C18.6806 31.2602 17.82 29.301 16.3418 27.7975C18.7313 25.5345 20.25 21.93 20.25 17.718C20.25 14.1895 19.5362 11.7645 18.2453 9.82558C17.6724 8.99165 17.0104 8.22267 16.2709 7.53227C15.9874 7.25863 15.7005 6.98861 15.4103 6.72227C15.1014 6.43371 14.8179 6.17046 14.4484 5.80089C13.689 5.04152 13.6029 4.43402 13.6029 4.11508C13.6038 3.9378 13.6328 3.76179 13.689 3.59365C13.9205 3.0931 13.9821 2.53065 13.8646 1.99184C13.7471 1.45303 13.4568 0.967347 13.0379 0.608641C12.6191 0.249935 12.0945 0.037837 11.544 0.00460247C10.9936 -0.0286321 10.4473 0.118815 9.98831 0.42452L9.97819 0.429583L9.963 0.439708L9.91744 0.470083L9.76556 0.571333C9.00618 1.11297 8.27457 1.69252 7.5735 2.30777C6.30788 3.42658 4.6575 5.08202 3.48806 7.0564C2.46721 8.69325 1.6479 10.4475 1.04794 12.2809C0.440438 14.0983 0 16.0676 0 17.718C0 21.93 1.51875 25.5295 3.90825 27.8025C2.43 29.301 1.56938 31.2602 1.03781 33.2194C2.26311e-07 37.0264 0 41.7345 0 45.3745V45.5618C0 55.9804 1.94906 62.1668 4.15631 65.8472C5.265 67.6899 6.41925 68.8796 7.38619 69.6289C7.90141 70.0308 8.46214 70.3706 9.05681 70.6414C9.40071 70.7669 9.76005 70.8453 10.125 70.8743C10.5503 70.8743 11.1932 70.6414 11.1932 70.6414C11.7879 70.3706 12.3486 70.0308 12.8638 69.6289C13.8257 68.8796 14.9901 67.6899 16.0937 65.8472C18.3009 62.1718 20.25 55.9804 20.25 45.5618V45.3795C20.25 41.7345 20.25 37.0315 19.2122 33.2143ZM7.52794 31.3412C8.1 30.7641 8.86444 30.3743 10.125 30.3743C11.3906 30.3743 12.15 30.7691 12.7221 31.3361C13.3599 31.9791 13.9117 33.022 14.3269 34.5458C15.1672 37.639 15.1875 41.6991 15.1875 45.5618C15.1875 55.3931 13.3397 60.5974 11.7501 63.2451C11.1426 64.2576 10.5705 64.9106 10.125 65.3207C9.48847 64.7086 8.9414 64.0099 8.49994 63.2451C6.91031 60.5923 5.0625 55.3931 5.0625 45.5618C5.0625 41.6991 5.08275 37.639 5.92313 34.5458C6.33825 33.027 6.89006 31.9791 7.52794 31.3361V31.3412ZM10.125 25.3118C8.17594 25.3118 5.0625 23.145 5.0625 17.718C5.0625 16.8422 5.32575 15.4551 5.85225 13.8857C6.33204 12.4041 6.99351 10.9876 7.82156 9.66864C8.262 8.92446 8.83406 8.20052 9.45169 7.53733C9.801 8.15496 10.2617 8.77765 10.8692 9.38515C11.2388 9.75471 11.7197 10.2002 12.1297 10.585L12.7575 11.1722C13.2891 11.6886 13.6991 12.1391 14.0282 12.6403C14.6357 13.5465 15.1875 14.9185 15.1875 17.718C15.1875 23.145 12.0741 25.3118 10.125 25.3118Z'
                  fill='black'
                />
              </svg>
            </div>
          </div>
          <div className='Services__card Services__card-5' data-aos='fade-left'>
            <div className='Services__text'>
              <h2 className='Services__sub-heading'>Branding</h2>
              <p className='Services__info'>
                Want your company's name to stick in a viewer's mind. This can
                happen if your brand stands out from the rest. Make it happen by
                following some great branding techniques.
              </p>
            </div>
            <div className='Services__icons-box'>
              <svg
                className='Services__icon'
                width='89'
                height='84'
                viewBox='0 0 89 84'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M44.5 34.375C52.8878 34.375 59.6875 27.5753 59.6875 19.1875C59.6875 10.7997 52.8878 4 44.5 4C36.1122 4 29.3125 10.7997 29.3125 19.1875C29.3125 27.5753 36.1122 34.375 44.5 34.375Z'
                  stroke='black'
                  strokeWidth='8'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M69.8125 79.9375C78.2003 79.9375 85 73.1378 85 64.75C85 56.3622 78.2003 49.5625 69.8125 49.5625C61.4247 49.5625 54.625 56.3622 54.625 64.75C54.625 73.1378 61.4247 79.9375 69.8125 79.9375Z'
                  stroke='black'
                  strokeWidth='8'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M19.1875 79.9375C27.5753 79.9375 34.375 73.1378 34.375 64.75C34.375 56.3622 27.5753 49.5625 19.1875 49.5625C10.7997 49.5625 4 56.3622 4 64.75C4 73.1378 10.7997 79.9375 19.1875 79.9375Z'
                  stroke='black'
                  strokeWidth='8'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </div>
          <div className='Services__card Services__card-6' data-aos='fade-left'>
            <div className='Services__text'>
              <h2 className='Services__sub-heading'>Content Writing</h2>
              <p className='Services__info'>
                Silence your critiques by with excellent content. Capture your
                reader's mind with some great piece of content.
              </p>
            </div>
            <div className='Services__icons-box'>
              <svg
                className='Services__icon'
                width='68'
                height='68'
                viewBox='0 0 68 68'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M19.305 48.8132L25.2484 47.0987L61.0335 10.885C61.3158 10.5957 61.4729 10.207 61.471 9.80288C61.4691 9.39873 61.3083 9.01154 61.0234 8.72495L58.8803 6.5582C58.7418 6.4159 58.5763 6.30261 58.3936 6.22494C58.2108 6.14728 58.0144 6.10679 57.8159 6.10585C57.6173 6.10491 57.4206 6.14353 57.2371 6.21945C57.0536 6.29538 56.8871 6.4071 56.7472 6.54808L21.0566 42.6673L19.3016 48.8098L19.305 48.8132ZM63.1226 2.2652L65.2658 4.43533C68.2223 7.42895 68.2493 12.2586 65.3198 15.2218L28.4445 52.5426L15.741 56.2011C14.9654 56.4182 14.1354 56.3187 13.433 55.9245C12.7307 55.5303 12.2134 54.8736 11.9948 54.0985C11.832 53.5412 11.8297 52.9493 11.988 52.3907L15.6836 39.4307L52.461 2.20783C53.1603 1.50366 53.9929 0.945784 54.9101 0.56674C55.8272 0.187696 56.8107 -0.00493057 57.8031 9.58932e-05C58.7955 0.00512236 59.777 0.207701 60.6903 0.596016C61.6036 0.984332 62.4305 1.55061 63.1226 2.26183V2.2652ZM24.246 6.15658C25.92 6.15658 27.2768 7.5302 27.2768 9.22445C27.2794 9.62496 27.2031 10.0221 27.0522 10.3931C26.9013 10.764 26.6787 11.1017 26.3973 11.3866C26.1158 11.6715 25.7809 11.8982 25.4118 12.0536C25.0427 12.209 24.6465 12.2901 24.246 12.2923H12.123C8.775 12.2923 6.0615 15.0396 6.0615 18.4247V55.2325C6.0615 58.621 8.775 61.3682 12.123 61.3682H48.492C51.84 61.3682 54.5569 58.621 54.5569 55.2325V42.9643C54.5569 41.2701 55.9136 39.8965 57.5876 39.8965C59.2616 39.8965 60.6184 41.2701 60.6184 42.9677V55.2325C60.6184 62.0095 55.188 67.504 48.492 67.504H12.123C5.427 67.504 0 62.0095 0 55.2325V18.4247C0 11.6511 5.427 6.15658 12.123 6.15658H24.246Z'
                  fill='black'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Link to='/works'>
      <Button text='Our work' size='large'  />
      </Link>
      <hr className='Services__vertical-line Services__vertical-line-2' />
    </div>
  );
};
