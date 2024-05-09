import { useEffect, useState } from "react";
import { List, Card, Image } from "antd";
import axios from "axios";

interface RoverCameraData {
  id: number;
  sol: number;
  camera: {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
  };
  img_src: string;
  earth_date: string;
  rover: {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
    max_sol: number;
    max_date: string;
    total_photos: number;
    cameras: { name: string; full_name: string }[];
  };
}

const Photos = () => {
  const [cameraData, setCameraData] = useState<RoverCameraData[]>([]);

  const getCameraData = async () => {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=buVSCf8489W2sQIUrsaOzm8zuR4kh733THuGyaCO`,
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  useEffect(() => {
    getCameraData().then((data) => {
      data.photos.length = 50;
      setCameraData(data.photos);
    });
  }, []);

  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={cameraData}
      renderItem={(item) => (
        <List.Item>
          <Card title={item.camera.full_name}>
            <Image src={item.img_src} />
          </Card>
        </List.Item>
      )}
    />
  );
};

export default Photos;
