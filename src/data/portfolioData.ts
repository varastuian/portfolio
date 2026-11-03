export interface Project {
  title: string;
  context: string;
  metric?: string;
  image: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface Publication {
  title: string;
  venue: string;
  year: string;
  type: string;
  description: string;
}

export const PORTFOLIO = {
  name: "Vahid Arastuian",
  domain: "varistotle.ir",
  title: "Applied Geospatial & Computer Vision Engineer",
  email: "varastuian@gmail.com",
  github: "https://github.com/varastuian",
  linkedin: "https://linkedin.com/in/varastuian",
  location: "Tehran, Iran",
  status: "Open to international relocation & remote roles",
  cvPath: "/Vahid-Arastuian-CV.pdf",
  bio: [
    "I am an Applied Geospatial and Computer Vision Engineer with an M.Sc. in Photogrammetry from the University of Tehran. My work focuses on multi-view geometry, UAV photogrammetry, and deploying deep learning perception models on real-world spatial sensor data.",
    "Over the past six years, I have built and deployed UAV 3D mapping pipelines, real-time video stabilization on NVIDIA Jetson edge hardware, automated pavement distress segmentation (YOLOv8), and spatio-temporal satellite forecasting models."
  ],

  projects: [
    {
      title: "Automatic Road Pavement Distress & Change Detection",
      context: "M.Sc. Thesis · University of Tehran",
      metric: "94.2% mAP@50",
      image: "/images/mask.jpg",
      description: "Trained and evaluated customized YOLOv8 instance segmentation models to detect, classify, and track temporal deterioration of road cracks from multi-temporal UAV aerial imagery. Generates vector shapefiles directly for GIS maintenance systems.",
      tags: ["Python", "PyTorch", "YOLOv8", "OpenCV", "QGIS", "GDAL"]
    },
    {
      title: "Autonomous UAV Photogrammetry & Mine Volumetrics",
      context: "GEO-SUP · Industrial Deployment",
      metric: "±1.8 cm GSD",
      image: "/images/uav_photogrammetry_mine.png",
      description: "End-to-end UAV photogrammetry pipeline for Gol Gohar open-pit mine. Automates Structure-from-Motion (SfM/MVS) processing, dense point cloud generation in CloudCompare, and monthly cut/fill volume calculation, replacing days of dangerous ground surveying.",
      tags: ["Python", "CloudCompare", "Metashape", "QGIS", "RTKLIB"]
    },
    {
      title: "Real-Time Video Stabilization for UAV Payloads",
      context: "Embedded Edge Vision · NVIDIA Jetson",
      metric: "42 FPS @ 1080p",
      image: "/images/video_stabilization_jetson.png",
      description: "Embedded vision pipeline fusing serial MAVLink IMU telemetry with pyramidal Lucas-Kanade optical flow. Smoothed homography trajectories via Kalman filtering and applied CUDA warping on a Jetson Xavier NX to eliminate high-frequency flight jitter.",
      tags: ["C++", "OpenCV CUDA", "Jetson Xavier", "MAVLink", "GStreamer"]
    },
    {
      title: "Spatio-Temporal Drought Forecasting of Lake Urmia",
      context: "Research Paper · University of Tehran",
      metric: "0.89 R²",
      image: "/images/lake_urmia_satellite.png",
      description: "Harvested multi-decade Earth observation datasets (MODIS NDVI, land surface temperature, CHIRPS) via Google Earth Engine API. Deployed Wavelet-LSTM recurrent models to forecast monthly Standardized Precipitation Index (SPI) values over the Lake Urmia basin.",
      tags: ["Python", "TensorFlow", "Google Earth Engine", "PyTorch", "GDAL"]
    },
    {
      title: "AI-Assisted Geospatial Decision Support System",
      context: "Patent Application",
      metric: "Patent Pending",
      image: "/images/patent_architecture.png",
      description: "Integrated framework combining remote sensing data cubes, ground hydrological telemetry, and deep learning algorithms to provide real-time decision support and flood/drought risk scoring for watershed management.",
      tags: ["Python", "GDAL", "PostGIS", "GeoServer", "System Architecture"]
    },
    {
      title: "Embedded GNSS PPK Data Logger & Hardware Payload",
      context: "GEO-SUP Hardware Rig",
      metric: "±1.5 cm accuracy",
      image: "/images/performance.png",
      description: "Custom Raspberry Pi payload capturing microsecond camera hot-shoe trigger interrupts synchronized with raw multi-frequency GNSS carrier phase data. Post-processed via RTKLIB for direct drone georeferencing without ground control points.",
      tags: ["C++", "Python", "RTKLIB", "Raspberry Pi", "Linux"]
    }
  ] as Project[],

  experience: [
    {
      role: "Computer Vision Developer & Geospatial Systems Engineer",
      company: "GEO-SUP",
      period: "2018 — Present",
      location: "Tehran, Iran",
      description: "Leading technical development of UAV photogrammetry workflows, edge computer vision models, and spatial analytics systems.",
      highlights: [
        "Implemented UAV photogrammetry pipelines for mine excavation and volume estimation using SfM/MVS.",
        "Deployed YOLO detection and vehicle tracking models on embedded NVIDIA Jetson platforms with TensorRT.",
        "Engineered vision-based video stabilization systems fusing optical flow with IMU sensor feeds via MAVLink.",
        "Supervised field operations, sensor calibration, and GNSS PPK/RTK base-rover setups across 150+ drone flights."
      ]
    },
    {
      role: "Full Stack Web Developer & Geospatial Systems",
      company: "Navatel — SGAS",
      period: "2021 — 2022",
      location: "Remote / Tehran, Iran",
      description: "Developed scalable web applications, REST/WebSocket APIs, and interactive geospatial mapping tools for real-time asset monitoring.",
      highlights: [
        "Architected WebSocket-based microservices to broadcast live geospatial telemetries to client dashboards with sub-second latency.",
        "Designed PostgreSQL/PostGIS spatial databases and optimized spatial indexing for millions of coordinate records.",
        "Collaborated with cross-functional engineering teams using Docker, Git, Swagger API, and agile Jira workflows."
      ]
    },
    {
      role: "Geospatial Research Assistant",
      company: "CRPLab — University of Tehran",
      period: "2015 — 2016",
      location: "Tehran, Iran",
      description: "Supported academic research in camera calibration, close-range photogrammetry, and multi-view stereo modeling.",
      highlights: [
        "Implemented camera calibration routines and epipolar geometry rectification for multi-view stereo experiments.",
        "Conducted 3D close-range scanning, surface mesh generation, and architectural heritage modeling."
      ]
    }
  ] as Experience[],

  education: [
    {
      degree: "M.Sc. in Photogrammetry & Geospatial Engineering",
      school: "University of Tehran",
      period: "2021 — 2024",
      thesis: "Automatic Change Detection of Pavement Distress Using Deep Learning and UAV Imagery",
      supervisors: "Dr. Mahdi Hasanlou & Dr. Mohammad Saadat Seresht",
      notes: "Ranked #1 engineering university in Iran. Teaching Assistant for 'Advanced Digital Image Processing'."
    },
    {
      degree: "B.Sc. in Geospatial Engineering",
      school: "University of Tehran",
      period: "2015 — 2020",
      thesis: "Bundle Adjustment & High-Resolution Aerial Photogrammetry",
      supervisors: "School Faculty",
      notes: "Foundations in Remote Sensing, Geodesy, Photogrammetry, GNSS GPS, Cartography, and Hydrology."
    }
  ],

  publications: [
    {
      title: "Automatic Road Pavement Distress Recognition Using Deep Learning Networks from Unmanned Aerial Imagery",
      venue: "Peer-Reviewed Research Paper",
      year: "2024",
      type: "Paper",
      description: "Deep learning framework for multi-class distress segmentation and spatial change detection on road networks using low-altitude drone imagery."
    },
    {
      title: "Prediction of Monthly Dry Days of Lake Urmia with Deep Learning Algorithms",
      venue: "Environmental Earth Observation & Hydrology",
      year: "2024",
      type: "Paper",
      description: "Recurrent LSTM models applied to long-term MODIS/Sentinel satellite datasets to forecast drought index fluctuations over Lake Urmia."
    },
    {
      title: "AI-Assisted Geospatial Decision Support System for Watershed Intelligence",
      venue: "Patent Application",
      year: "2024",
      type: "Patent",
      description: "Integrated framework combining remote sensing data cubes, ground hydrological telemetry, and deep learning algorithms for real-time watershed monitoring."
    }
  ] as Publication[],

  skills: {
    "Computer Vision & ML": ["PyTorch", "YOLOv8", "OpenCV", "CNNs", "Transformers", "CUDA", "TensorRT", "Lucas-Kanade Optical Flow"],
    "Photogrammetry & GIS": ["SfM / MVS", "CloudCompare", "QGIS", "ArcGIS", "GDAL", "Rasterio", "RTKLIB (PPK/RTK)", "Google Earth Engine", "Metashape"],
    "Languages & Systems": ["Python", "C / C++", "Linux", "Docker", "NVIDIA Jetson", "Raspberry Pi", "ROS", "MAVLink", "GStreamer"],
    "Backend & WebGIS": ["PostgreSQL / PostGIS", "FastAPI", "Node.js", "WebSockets", "Redis", "Leaflet", "Git", "Java Spring Boot"]
  },

  references: [
    { name: "Dr. Mahdi Hasanlou", title: "Associate Professor, University of Tehran", email: "hasanlou@ut.ac.ir" },
    { name: "Dr. Mohammad Saadat Seresht", title: "Associate Professor, University of Tehran", email: "msaadat@ut.ac.ir" },
    { name: "Dr. Farzaneh Dadrass Javan", title: "Assistant Professor, ITC University of Twente", email: "f.dadrassjavan@utwente.nl" },
    { name: "Dr. Arash Malekian", title: "Professor, University of Tehran", email: "malekian@ut.ac.ir" }
  ]
};
