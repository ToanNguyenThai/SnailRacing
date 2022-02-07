
import Header from './component/header'
import ComingSoon from './component/comingSoon'
import Nftitems from './component/nft-items/nftitems'
import Racetype from './component/racetype/racetype'

export default function Home() {
    return (
        <>
            <Header></Header>
            <ComingSoon></ComingSoon>
            <Racetype />
            <Nftitems />
        </>
    )
}
