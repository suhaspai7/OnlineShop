import React from 'react';
import {makeStyles,createStyles,AppBar,Toolbar,IconButton,Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Categories from './Categories';
import './Home.css';
import Product from './Product';
import FooterBar from './Footer';

const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      display: 'flex',
    },
    child: {
      flex: 1,
      height: '60vh',
    },
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
  }),
);


function Home() {

    const classes=useStyles();
    return (
        <>
        <div className="home">

            <img className="home__image" src="https://images.unsplash.com/photo-1560762484-813fc97650a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" alt="img" />

            <div className="home__categories">
                <Categories title="Laptops for daily use" image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <Categories title="Programming Laptops" image="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                <Categories title="Gaming Laptops" image="https://images.unsplash.com/photo-1590109976148-bbc058ee025a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                <Categories title="Laptops for Business" image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
            </div>

            <div className="home__row">
                <Product id="22456" title="ASUS TUF Gaming A15 Laptop 15.6 FHD 144Hz Ryzen 7 4800H, GTX 1650 4GB Graphics, FA506IH-AL090T" rating={4} price={1010.87} image="https://m.media-amazon.com/images/I/A1A2yQlAXCL._AC_UY327_FMwebp_QL65_.jpg" />
                <Product id="29456" title="Lenovo Thinkpad E14 Intel Core i5 10th Gen Display 14-inch Full HD IPS Thin and Light Laptop with 8 GB RAM" rating={5} price={387.03} image="https://m.media-amazon.com/images/I/71k3N4gxNeL._AC_UY327_FMwebp_QL65_.jpg" />
                <Product id="23426" title="AVITA Essential NE14A2INC433-CR 14-inch Laptop (Celeron N4000/4GB/128GB SSD/Window 10 Home in S Mode/Integrated Graphics)" rating={4} price={7.46} image="https://m.media-amazon.com/images/I/61FWSA8BcDL._AC_UY327_FMwebp_QL65_.jpg" />
            </div>

            <div className="home__ad">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/AMZN_OutletDeals_Template_March_1500x200_wh_EN.jpg" />
            </div>

            <div className="home__row">
                <Product id="18634" title="Mi Notebook Horizon Edition 14 Intel Core i5-10210U 10th Gen Thin and Light Laptop(8GB/512GB SSD/Windows 10/Nvidia MX350 2GB Graphics/Grey/1.35Kg), XMA1904-AR+Webcam" rating={4} price={8.62} image="https://m.media-amazon.com/images/I/712rw0zcH8L._AC_UL480_FMwebp_QL65_.jpg" />
                <Product id="23156" title="Lenovo IdeaPad S340 10th Gen Intel Core i3 14 inch Full HD IPS Thin and Light Laptop (8GB/256GB SSD/Windows 10/MS Office 2019/Platinum Grey/1.6Kg), 81VV00JFIN" rating={5} price={20.77} image="https://images-na.ssl-images-amazon.com/images/I/51Ia5kZafYL._SY300_.jpg" />
            </div>

            <div className="home__row">
                <Product id="18633" title="Dell Inspiron 3595 15.6-inch HD Laptop (A9-9425/4GB/1TB HDD/Win 10 + MS Office/Radeon R5 Integrated Graphics/Silver)" rating={4} price={133.75} image="https://m.media-amazon.com/images/I/711l--hfnHL._AC_UY327_FMwebp_QL65_.jpg" />
                <Product id="18631" title="Mi Notebook 14  Intel core i3-10110U 10th Gen Thin and Light Laptop (Home/Intel UHD Graphics/Silver/1.5Kg)" rating={4} price={11.31} image="https://m.media-amazon.com/images/I/71zlGU1N2iL._AC_UY327_FMwebp_QL65_.jpg" />
                <Product id="23456" title="HP 15s du2069TU 15.6-inch FHD Laptop (10th Gen i3-1005G1/4GB/1TB/Win 10/MS Office/1.75 kg)" rating={3} price={16.47} image="https://m.media-amazon.com/images/I/71qfp2hmFvL._AC_UY327_FMwebp_QL65_.jpg" />
            </div>

            <div className="home__row">
                <Product id="23451" title="Samsung 27 inch (68.6 cm) Curved Bezel Less LED Backlit Computer Monitor - Full HD, VA Panel with VGA, HDMI, Display, Audio in, Heaphone Ports - LC27F591FDWXXL (Silver).   Resolution: 1,920 x 1,080, Brightness (Min): 200 cd/m². 1800R curvature of the screen provides a truly immersive viewing experience. Screen Size (cm): 67.31, Contrast Ratio Static 3,000:1. Colour Support: 16.7 M, Aspect Ratio: 16:9. Response Time 4 (GtG),OS Compatibility: Windows, Mac" rating={5} price="298.77" image="https://m.media-amazon.com/images/I/71Dwx3x6m9L._AC_UY327_FMwebp_QL65_.jpg" />
            </div>
        </div>
       
        
        </>
    )
}

export default Home
