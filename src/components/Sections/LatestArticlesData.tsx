import { ReactComponent as DiseaseDetectionIcon } from "../../assets/article-1.svg";
import { ReactComponent as HerbalMedicinesIcon } from "../../assets/article-2.svg";
import { ReactComponent as NaturalCareIcon } from "../../assets/article-3.svg";

export const LatestArticlesData = [
    {
        id: 0,
        title: "Disease detection, check up in the laboratory",
        description: "In this case, the role of the health laboratory is very important to do a disease detection...",
        image: <DiseaseDetectionIcon />,
    },
    {
        id: 1,
        title: "Herbal medicines that are safe for consumption",
        description: "Herbal medicine is very widely used at this time because of its very good for your health...",
        image: <HerbalMedicinesIcon />,
    },
    {
        id: 2,
        title: "Natural care for healthy facial skin",
        description: "A healthy lifestyle should start from now and also for your skin health. There are some...",
        image: <NaturalCareIcon />,
    }
]