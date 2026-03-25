import styles from "./SampleCard.module.scss";
import "./Lightbox.scss";
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from "react-photo-view";
import LogoMain from "../assets/LogoMain.svg?react";
import ZoomIn from "../assets/lightbox/ZoomIn.svg?react";
import ZoomOut from "../assets/lightbox/ZoomOut.svg?react";
import RotateLeft from "../assets/lightbox/RotateLeft.svg?react";
import RotateRight from "../assets/lightbox/RotateRight.svg?react"
import Close from "../assets/lightbox/Close.svg?react";

interface SampleCard {
    title: string;
    desc: string;
    pair: string;
    thumb: string;
    img: string;

}

export default function SampleCard(props: SampleCard) {

    return (
        <PhotoProvider speed={() => 300} maskOpacity={0.4} toolbarRender={({onRotate, rotate, onScale, scale, onClose}) => {
            
            const scalePercent = Math.round(scale * 100)            

            return (
            <div className="lightbox-bar">
                <div className="lightbox-title">
                    <LogoMain className="logo"/>
                    <span>{props.title}</span>
                </div>
                <div className="lightbox-tools">
                    <RotateLeft onClick={() => onRotate(rotate - 90)} className="lightbox-icon"/>
                    <div className="lightbox-zoom">
                        <ZoomOut onClick={() => onScale(scale - 0.5)} className="lightbox-icon"/>
                        <span onClick={() => onScale(1)} className="lightbox-scale">{scalePercent}%</span>
                        <ZoomIn onClick={() => onScale(scale + 0.5)} className="lightbox-icon"/>
                    </div>
                    <RotateRight onClick={() => onRotate(rotate + 90)} className="lightbox-icon"/>
                </div>
                <div className="lightbox-closeWrapper">
                    <Close onClick={onClose} className="lightbox-icon lightbox-close"/>
                </div>
                
            </div>
        )}}>
            <PhotoView src={props.img}>
                <div className={styles.card}>
                    <img src={props.thumb} loading="lazy" decoding="async" className={styles.thumbnail}/>
                    <h3>{props.title}</h3>
                    <p>{props.desc}</p>
                    <span>{props.pair}</span>
                </div>
            </PhotoView>
        </PhotoProvider>
    )
}