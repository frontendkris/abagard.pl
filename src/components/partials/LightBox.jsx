import { useState } from "react";
import FsLightbox from "fslightbox-react";

export default function LighBox(params) {
  const [toggler, setToggler] = useState(false);
  const [slide, setSlide] = useState(false);

  let photos = [
    "100_4352.JPG",
    "100_4353.JPG",
    "100_4354.JPG",
    "100_4355.JPG",
    "100_4356.JPG",
    "100_4357.JPG",
    "100_4572.JPG",
    "100_4573.JPG",
    "100_4574.JPG",
    "100_4885.JPG",
    "100_4889.JPG",
    "100_4890.JPG",
    "100_4891.JPG",
    "100_4892.JPG",
    "100_4893.JPG",
    "100_4894.JPG",
    "100_4895.JPG",
    "100_4896.JPG",
    "100_4912.JPG",
    "100_7118.JPG",
    "100_7119.JPG",
    "100_7120.JPG",
    "100_7121.JPG",
    "100_7122.JPG",
    "100_7123.JPG",
    "100_7124.JPG",
    "100_7126.JPG",
    "100_7127.JPG",
    "100_7129.JPG",
    "100_7130.JPG",
    "100_7131.JPG",
    "100_8951.JPG",
    "100_8952.JPG",
    "100_8953.JPG",
    "100_8954.JPG",
    "100_8955.JPG",
    "100_8956.JPG",
    "100_8957.JPG",
    "100_8958.JPG",
    "100_8959.JPG",
    "20170602_135220.jpg",
    "20171115_144221.jpg",
    "20171116_133120.jpg",
    "20171204_171226.jpg",
    "20171214_151309.jpg",
    "20180411_073255.jpg",
    "20180523_165417.jpg",
    "20180525_093658.jpg",
    "20180607_183133.jpg",
    "20180720_095454.jpg",
    "20180720_095503.jpg",
    "20181207_181525.jpg",
    "20181207_181549.jpg",
    "20181207_181557.jpg",
    "20181207_181612.jpg",
    "20181207_181632.jpg",
    "20181211_185455.jpg",
    "20190910_170426.jpg",
    "20190910_170445.jpg",
    "20190910_170511.jpg",
    "20190910_170525.jpg",
    "20191001_173213.jpg",
    "20191014_142823.jpg",
    "20191025_122514.jpg",
    "20191114_101629.jpg",
    "20191114_101639.jpg",
    "20191116_130724.jpg",
    "20191121_083326.jpg",
    "20191121_083351.jpg",
    "20191211_222022.jpg",
    "20191212_151004.jpg",
    "20200121_134805.jpg",
    "20200121_134817.jpg",
    "20200121_134832.jpg",
    "20200121_134846.jpg",
    "20200121_134910.jpg",
    "20200902_095818.jpg",
    "20200902_095831.jpg",
    "20200902_095911.jpg",
    "20201006_135539.jpg",
    "20201006_135550.jpg",
    "20201006_135607.jpg",
    "20201006_135627.jpg",
    "20210205_075621.jpg",
    "20210514_121102.jpg",
    "20210604_100714.jpg",
    "DSC_0870.JPG",
    "DSC_0871.JPG",
    "DSC_0872.JPG",
    "DSC_0873.JPG",
    "DSC_0874.JPG",
    "DSC_0875.JPG",
    "DSC_0876.JPG",
    "DSC_0877.JPG"
  ];
  if (params.isExcerpt) {
    photos = [
      "20191014_142823.jpg",
      "20200121_134805.jpg",
      "20180411_073255.jpg",
      "20181211_185455.jpg",
      "20191121_083326.jpg",
      "20191025_122514.jpg",
      "20200121_134832.jpg",
      "20171214_151309.jpg",
    ]
  }

  let fullSizePhotos = [];
  photos.forEach((el, index) => {
    fullSizePhotos[index] = `/portfolio_full/${el}`
  });

  return (
    <>
      {
        photos.map((el, index) => <img key={`thumbnail-${index}`} className="mb-4 transition-all ease-in-out" src={`/portfolio/${el}`} loading="lazy" onClick={() => {setSlide(index + 1); setToggler(true);}} />)
      }
      {/* <FsLightbox
        toggler={toggler}
        sources={fullSizePhotos}
        type="image"
        slide={slide ? slide : 1}
      /> */}
    </>
  );
};
