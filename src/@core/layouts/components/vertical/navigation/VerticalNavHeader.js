// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'

// ** Styled Components
const MenuHeaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(4.5),
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight
}))

const StyledLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
})

const VerticalNavHeader = props => {
  // ** Props
  const { verticalNavMenuBranding: userVerticalNavMenuBranding } = props

  return (
    <MenuHeaderWrapper className='nav-header' sx={{ pl: 6 }}>
      {userVerticalNavMenuBranding ? (
        userVerticalNavMenuBranding(props)
      ) : (
        <Link href='/' passHref>
          <StyledLink>
            <svg width='81' height='24' viewBox='0 0 81 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M8.01133 22.9235H0V0.474121H8.04317C11.315 0.474121 13.9798 1.47703 16.0376 3.48286C18.0953 5.48869 19.1244 8.23298 19.1249 11.7157C19.1249 15.1786 18.0904 17.9125 16.0213 19.9174C13.9522 21.9224 11.2823 22.9244 8.01133 22.9235ZM4.36982 18.87H7.85279C9.81616 18.87 11.4313 18.2578 12.6982 17.0334C13.9651 15.8089 14.5974 14.0355 14.5952 11.713C14.5952 9.39149 13.9629 7.61285 12.6982 6.3771C11.4336 5.14136 9.82903 4.52394 7.88464 4.52484H4.36982V18.87Z'
                fill='#6913D8'
              />
              <path
                d='M33.1549 17.4113L36.6697 18.456C36.2469 19.8923 35.4184 21.0745 34.184 22.0027C32.9496 22.9308 31.414 23.3954 29.577 23.3963C27.3395 23.3963 25.4396 22.6415 23.8773 21.1321C22.315 19.6226 21.5337 17.6019 21.5332 15.0699C21.5332 12.6634 22.2931 10.6949 23.813 9.16418C25.3328 7.6335 27.1272 6.86816 29.1963 6.86816C31.6032 6.86816 33.4873 7.58585 34.8486 9.02123C36.2099 10.4566 36.8908 12.4306 36.8912 14.9432C36.8912 15.1126 36.886 15.3025 36.8757 15.513C36.8648 15.7243 36.8601 15.893 36.8601 16.0197L36.8282 16.2413H25.6815C25.6938 16.7243 25.8073 17.1994 26.0147 17.6359C26.2221 18.0723 26.5187 18.4604 26.8854 18.7751C27.6455 19.4526 28.5534 19.7913 29.6089 19.7913C31.4024 19.7891 32.5844 18.9957 33.1549 17.4113ZM25.7763 13.3599H32.743C32.7005 12.4927 32.3891 11.7655 31.8087 11.1784C31.2283 10.5912 30.3787 10.2956 29.26 10.2915C28.2465 10.2915 27.4231 10.6077 26.7899 11.24C26.1566 11.8723 25.8188 12.579 25.7763 13.3599Z'
                fill='#6913D8'
              />
              <path
                d='M39.2656 18.6795C39.2656 17.3498 39.6983 16.2837 40.5637 15.4811C41.4291 14.6785 42.5481 14.172 43.9207 13.9615L47.7512 13.3917C48.5321 13.286 48.9228 12.9166 48.9232 12.2833C48.9295 12.0049 48.8717 11.7287 48.7542 11.4761C48.6367 11.2235 48.4628 11.0014 48.2458 10.8267C47.7909 10.4469 47.1417 10.2567 46.298 10.2563C45.4114 10.2563 44.7095 10.4991 44.1923 10.9846C43.6831 11.4536 43.3715 12.099 43.3211 12.7894L39.582 11.9981C39.7297 10.6472 40.3948 9.45437 41.5772 8.41962C42.7597 7.38487 44.3208 6.86771 46.2607 6.86816C48.5831 6.86816 50.2931 7.42235 51.3907 8.53073C52.4882 9.6391 53.0372 11.0587 53.0376 12.7894V20.4532C53.0294 21.2805 53.0929 22.107 53.2273 22.9233H49.3656C49.26 22.4595 49.2071 21.8366 49.2071 21.0548C48.2135 22.5963 46.683 23.3669 44.6158 23.3664C43.0106 23.3664 41.7175 22.9019 40.7365 21.9728C39.7555 21.0438 39.2652 19.946 39.2656 18.6795ZM45.504 20.2317C46.4976 20.2317 47.3156 19.9519 47.9578 19.3923C48.6001 18.8327 48.9221 17.909 48.9239 16.6213V15.9249L45.4084 16.4628C44.1207 16.6529 43.4769 17.3078 43.4769 18.4275C43.4727 18.6673 43.5187 18.9053 43.612 19.1262C43.7054 19.3471 43.844 19.5459 44.0189 19.71C44.3753 20.0582 44.8703 20.2321 45.504 20.2317Z'
                fill='#6913D8'
              />
              <path d='M61.4964 22.9236H57.2852V0H61.4964V22.9236Z' fill='#6913D8'/>
              <path d='M70.2022 22.9236H65.9902V0H70.2022V22.9236Z' fill='#6913D8'/>
              <path
                d='M80.2722 0.474121L79.2559 16.0862H76.1842L75.168 0.474121H80.2722ZM75.9654 22.4513C75.7293 22.221 75.5428 21.9449 75.4176 21.6398C75.2923 21.3348 75.2309 21.0073 75.2371 20.6776C75.2318 20.3457 75.2936 20.0161 75.4188 19.7087C75.5439 19.4012 75.7298 19.1222 75.9654 18.8883C76.1882 18.6501 76.4581 18.4609 76.7579 18.3326C77.0578 18.2043 77.3811 18.1398 77.7072 18.1431C78.3785 18.1449 79.0218 18.4123 79.4964 18.887C79.9711 19.3617 80.2386 20.0049 80.2403 20.6762C80.2458 21.0074 80.1824 21.336 80.0541 21.6414C79.9258 21.9467 79.7355 22.222 79.4951 22.4499C79.2611 22.6853 78.9821 22.8711 78.6746 22.9963C78.3672 23.1214 78.0377 23.1833 77.7058 23.1782C77.3816 23.1815 77.0602 23.1185 76.7612 22.993C76.4623 22.8675 76.1921 22.6822 75.9674 22.4485L75.9654 22.4513Z'
                fill='#F9E05B'
              />
            </svg>
          </StyledLink>
        </Link>
      )}
    </MenuHeaderWrapper>
  )
}

export default VerticalNavHeader