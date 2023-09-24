import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { PATH } from '../App'

// Styles
const TABS_WIDTH = 30
const TabWrapper = styled.div`
    position: fixed;
    left: calc(50% - ${TABS_WIDTH / 2}vw);
    width: ${TABS_WIDTH}vw;
    min-width: 600px;
    bottom: 50px;
    border-radius: 40px;
    height: 72px;
    background: #262626;
    display: flex;
    justify-content: center;
    align-items: center;
    /* 600px min width / 0.35 (50vw-15vw) / 2 = 300px to center on small screen */
    @media (max-width: 1715px) {
        left: calc(50% - 300px);
    }
`

const StyledTab = styled.div<{ $isSelected?: boolean }>`
    border-radius: 30px;
    opacity: 0.9;
    height: 54px;

    display: flex;
    justify-content: center;
    align-items: center;
    min-width: calc(30vw / 6);
    padding: 0 8px;
    font-size: 24px;
    margin: 0 auto;
    ${(props) => (props.$isSelected ? `background: #ffe45e;` : 'color: white;')}
    :hover {
        cursor: pointer;
    }
`

interface Tab {
    label: string
    to: PATH
}
interface NavTabsProps {
    tabs: Tab[]
}

const NavTabs: React.FC<NavTabsProps> = ({ tabs }) => {
    const { pathname } = useLocation()

    // determine selected tab
    const [selectedIndex, setSelectedIndex] = useState<null | number>(null)
    useEffect(() => {
        switch (pathname) {
            case '/':
                setSelectedIndex(0)
                break
            default:
                setSelectedIndex(0)
        }
    }, [pathname])

    return (
        <TabWrapper>
            {tabs.map((tab, index) => (
                <StyledTab
                    key={`navigation-tab-${tab.label}`}
                    $isSelected={selectedIndex === index}
                >
                    {tab.label}
                </StyledTab>
            ))}
        </TabWrapper>
    )
}

export default NavTabs
