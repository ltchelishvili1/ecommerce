import './directory-item.styles.jsx'
import { BackgroundImage, Body, DirectoryItemContainer, ShopNow, Title } from './directory-item.styles.jsx'
import {useNavigate} from 'react-router-dom'
const DirectoryItem = ({ category }) => {
    const { imageUrl, title,route } = category
    const navigate = useNavigate() 
    const onNavigateHandler = () => navigate(route)
    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage style={{
                background: `url(${imageUrl})`
            }}>

            </BackgroundImage>
            <Body>
                <Title>{title}</Title>
                <ShopNow>Shop Now</ShopNow>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem