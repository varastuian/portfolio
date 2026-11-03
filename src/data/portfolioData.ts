export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'vision' | 'photogrammetry' | 'geospatial';
  categoryLabel: string;
  hardware?: string;
  metric: string;
  description: string;
  challenge: string;
  solution: string;
  architecture: string[];
  techStack: string[];
  highlights: string[];
  codeSnippet?: {
    language: string;
    code: string;
  };
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  link?: string;
}

export interface Reference {
  name: string;
  title: string;
  institution: string;
  email: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Vahid Arastuian",
    alias: "Varistotle",
    domain: "varistotle.ir",
    title: "Applied Geospatial & Computer Vision Engineer",
    secondaryTitle: "Photogrammetry M.Sc. | Edge AI & Perception Specialist",
    email: "varastuian@gmail.com",
    github: "https://github.com/varastuian",
    linkedin: "https://linkedin.com/in/varastuian",
    location: "Tehran, Iran",
    coordinates: "35.6892° N, 51.3890° E",
    relocation: "Open to International Relocation & Full-Time On-site / Remote Roles",
    cvPath: "/Vahid-Arastuian-CV.pdf",
    shortBio: "Applied Geospatial and Computer Vision Engineer with an M.Sc. in Photogrammetry from the University of Tehran. Specialized in end-to-end perception systems, UAV imagery, SfM/MVS 3D reconstruction, and real-time deep learning deployment on edge platforms (NVIDIA Jetson). Experienced with noisy spatial datasets and high-precision GNSS/PPK workflows.",
  },

  telemetry: {
    mscDegree: "Univ. of Tehran (Top Engineering School)",
    targetRoles: ["Computer Vision Engineer", "Geospatial AI Specialist", "Perception Engineer", "Robotics / UAV Software Engineer"],
    yearsExperience: "6+ Years",
    fieldFlightHours: "150+ UAV Missions",
    currentFocus: "YOLOv8 & Transformer-based Change Detection on Spatio-Temporal Sensor Data",
  },

  skills: [
    {
      domain: "Computer Vision & Deep Learning",
      description: "End-to-end model development, neural architecture fine-tuning, and edge inference optimization.",
      skills: [
        { name: "YOLO (v5/v8/v11)", level: 95 },
        { name: "PyTorch & TorchVision", level: 90 },
        { name: "OpenCV (C++ / Python)", level: 92 },
        { name: "Deep Learning Architectures (CNNs, ViTs, LSTMs)", level: 88 },
        { name: "Temporal Change Detection", level: 90 },
        { name: "CUDA & TensorRT Acceleration", level: 82 },
      ]
    },
    {
      domain: "Photogrammetry, 3D & Geospatial",
      description: "From raw sensor acquisition to dense point clouds, digital surface models, and spatial analytics.",
      skills: [
        { name: "SfM / MVS (Structure from Motion)", level: 94 },
        { name: "Dense Point Clouds & Mesh (CloudCompare)", level: 90 },
        { name: "GNSS Post-Processing (PPK / RTK, RTKLIB)", level: 92 },
        { name: "QGIS, ArcGIS Pro, GeoServer", level: 95 },
        { name: "GDAL, Rasterio, Shapely, PyProj", level: 92 },
        { name: "Google Earth Engine & Satellite Data (Sentinel/MODIS)", level: 86 },
      ]
    },
    {
      domain: "Systems, Edge & Hardware Integration",
      description: "Deploying production algorithms onto embedded UAV payloads and robotics platforms.",
      skills: [
        { name: "NVIDIA Jetson (Nano, Xavier NX)", level: 88 },
        { name: "Raspberry Pi & Sensor Data Loggers", level: 90 },
        { name: "ROS (Robot Operating System) & MAVLink", level: 80 },
        { name: "FFmpeg, GStreamer & RTSP Video Streaming", level: 85 },
        { name: "Docker Containerization & Linux / Bash", level: 90 },
        { name: "C / C++ (High-Performance Compute)", level: 85 },
      ]
    },
    {
      domain: "Full-Stack WebGIS & Backend",
      description: "Real-time spatial data streaming, microservices, and interactive geospatial mapping applications.",
      skills: [
        { name: "WebGIS (Leaflet, Mapbox, OpenLayers)", level: 90 },
        { name: "Python (FastAPI, Flask) & Node.js", level: 88 },
        { name: "Java Spring Boot & ASP.NET", level: 80 },
        { name: "PostgreSQL / PostGIS & MongoDB", level: 88 },
        { name: "WebSockets & Real-time Event Streaming", level: 86 },
        { name: "Git, CI/CD, Agile / Jira", level: 92 },
      ]
    }
  ],

  projects: [
    {
      id: "uav-mine-photogrammetry",
      title: "Autonomous UAV Photogrammetry & Mine Volumetrics",
      subtitle: "Large-scale terrain modeling and automated cut/fill volume calculation from aerial imagery",
      category: "photogrammetry",
      categoryLabel: "Photogrammetry & 3D",
      hardware: "DJI Matrice 300 RTK + Sony RX1R II",
      metric: "±1.8 cm GSD · 240k+ Meshes Reconstructed",
      description: "Engineered and operated industrial UAV photogrammetry pipelines for pit excavation volume calculations, slope stability assessment, and high-resolution digital surface model (DSM) generation at Gol Gohar mine.",
      challenge: "Processing tens of thousands of high-resolution aerial images under harsh lighting, severe dust conditions, and non-uniform ground elevations without losing geometric fidelity.",
      solution: "Implemented an automated Structure from Motion (SfM) and Multi-View Stereo (MVS) processing script with rigorous bundle adjustment and ground control point (GCP) constraints. Automated polygon clipping and TIN surface subtraction to extract volumetric measurements within minutes.",
      architecture: [
        "Mission flight path planning with 80% forward / 70% side overlap",
        "Dual-frequency GNSS PPK timestamp synchronization",
        "Feature matching via SIFT/ORB + Levenberg-Marquardt Bundle Adjustment",
        "Dense point cloud filtering and triangulation in CloudCompare",
        "Volumetric cut/fill raster differential calculation"
      ],
      techStack: ["Python", "CloudCompare", "Agisoft Metashape", "GDAL", "QGIS", "RTKLIB"],
      highlights: [
        "Reduced monthly stockpile survey time from 4 days of ground total station survey to 3 hours of automated drone processing.",
        "Delivered centimeter-accurate digital elevation models (DEMs) for heavy excavation fleet routing.",
        "Built automated reporting scripts comparing current surface rasters against design pit geometry."
      ],
      codeSnippet: {
        language: "python",
        code: `# Automated DEM differential calculation for stockpile volume
import rasterio
import numpy as np

def compute_cut_fill_volume(before_dem_path, after_dem_path, cell_size=0.04):
    with rasterio.open(before_dem_path) as src_before, rasterio.open(after_dem_path) as src_after:
        dem_before = src_before.read(1)
        dem_after = src_after.read(1)
        
        # Valid elevation mask (exclude nodata)
        mask = (dem_before > 0) & (dem_after > 0)
        diff = dem_before[mask] - dem_after[mask]
        
        pixel_area = cell_size ** 2
        cut_volume = np.sum(diff[diff > 0]) * pixel_area
        fill_volume = np.abs(np.sum(diff[diff < 0])) * pixel_area
        
        return {"cut_m3": round(cut_volume, 2), "fill_m3": round(fill_volume, 2)}`
      }
    },
    {
      id: "uav-video-stabilization",
      title: "Real-Time Video Stabilization & Optical Flow for UAV Payloads",
      subtitle: "Sensor-fused video stabilization using MAVLink telemetry and Lucas-Kanade optical flow",
      category: "vision",
      categoryLabel: "Computer Vision & Edge AI",
      hardware: "NVIDIA Jetson Xavier NX + Gimbal IMU",
      metric: "42 FPS @ 1080p · <24ms Pipeline Latency",
      description: "Designed a real-time vision pipeline running on embedded hardware to eliminate high-frequency UAV motor vibrations and aerodynamic oscillations for gimbaled payload video feeds.",
      challenge: "Low-power edge computation budget (under 15W) with strict sub-30ms latency requirements to allow downstream object tracking and pilot viewing without nauseating jitter.",
      solution: "Fused asynchronous IMU telemetry (quaternion orientation rates over MAVLink) with pyramidal Lucas-Kanade optical flow. Used affine transformation warping via OpenCV CUDA backend on the NVIDIA Jetson platform.",
      architecture: [
        "RTSP H.264 camera stream ingestion via hardware GStreamer pipeline",
        "IMU rotation delta query via serial MAVLink protocol",
        "Sparse corner tracking across consecutive frames via Shi-Tomasi detector",
        "Kalman filter smoothing on computed homography trajectory",
        "Warp affine projection executed with CUDA kernels to output stabilized frame"
      ],
      techStack: ["C++", "OpenCV CUDA", "NVIDIA Jetson", "MAVLink", "GStreamer", "FFmpeg", "Linux"],
      highlights: [
        "Achieved rock-solid video stabilization at full 1080p60 on NVIDIA Jetson Xavier NX.",
        "Integrated smoothly into downstream deep learning tracking models with zero dropped frames.",
        "Demonstrated 85% jitter reduction compared to raw drone gimbal feeds."
      ],
      codeSnippet: {
        language: "cpp",
        code: `// Real-time homography trajectory smoothing with Kalman filter
cv::Mat smoothTrajectory(const cv::Mat& currentFrame, const cv::Mat& prevFrame, const cv::Vec3d& gyroRates) {
    std::vector<cv::Point2f> prevPts, currPts;
    std::vector<uchar> status;
    std::vector<float> err;
    
    cv::goodFeaturesToTrack(prevFrame, prevPts, 200, 0.01, 30);
    cv::calcOpticalFlowPyrLK(prevFrame, currentFrame, prevPts, currPts, status, err);
    
    cv::Mat H = cv::estimateAffinePartial2D(prevPts, currPts);
    // Combine with gyro quaternion prior to avoid motion blur drift
    return H;
}`
      }
    },
    {
      id: "pavement-distress-change-detection",
      title: "Deep Learning Automatic Road Pavement Distress & Change Detection",
      subtitle: "M.Sc. Thesis: Multi-temporal UAV image segmentation for automated infrastructure monitoring",
      category: "vision",
      categoryLabel: "Deep Learning & Vision",
      hardware: "NVIDIA RTX 3090 / Custom UAV payload",
      metric: "94.2% mAP@50 · Sub-centimeter crack localization",
      description: "Engineered a deep neural network perception framework to detect, classify, and track temporal evolution of pavement cracks, potholes, and rutting from low-altitude drone imagery.",
      challenge: "High intra-class variation, subtle surface textures, shadows from roadside trees/vehicles, and registering multi-temporal drone flights with differing illumination.",
      solution: "Fine-tuned YOLOv8 segmentation and customized loss functions for thin-crack boundary delineation. Implemented a spatial orthophoto co-registration pipeline using SIFT and rigid transformation matrices to track year-over-year defect progression.",
      architecture: [
        "High-resolution orthomosaic tiling with geospatial georeferencing",
        "Custom data augmentation: illumination transfer, road texture masking",
        "YOLOv8 instance segmentation model trained on annotated distressed pavement",
        "Multi-temporal raster overlay and change vector analysis (CVA)",
        "Automated GIS shapefile export for municipal road repair prioritization"
      ],
      techStack: ["PyTorch", "YOLOv8", "OpenCV", "Python", "GDAL", "QGIS", "TensorFlow"],
      highlights: [
        "M.Sc. Thesis at University of Tehran graded with highest honors.",
        "Authored research publication on deep learning networks for road distress detection from unmanned aerial imagery.",
        "Delivered vector polygon layers ready for direct ingestion into municipal GIS asset management systems."
      ]
    },
    {
      id: "lake-urmia-drought-forecasting",
      title: "Spatio-Temporal Drought Forecasting of Lake Urmia",
      subtitle: "Predictive deep learning models for satellite Earth observation and precipitation index analysis",
      category: "geospatial",
      categoryLabel: "Remote Sensing & AI",
      hardware: "Google Earth Engine + HPC Cluster",
      metric: "0.89 R² Correlation · 10-year Satellite Time-Series",
      description: "Researched and built a predictive spatio-temporal deep learning model forecasting the Standardized Precipitation Index (SPI) and dry days over Lake Urmia basin.",
      challenge: "Handling complex non-linear hydrological dynamics, multi-scale meteorological satellite data cubes, and missing time intervals caused by cloud cover.",
      solution: "Harvested multi-decade remote sensing datasets via Google Earth Engine API (MODIS, CHIRPS, Sentinel-2). Formulated a Wavelet-LSTM recurrent network architecture to model cyclical drought phenomena across temporal lags.",
      architecture: [
        "Automated GEE extraction pipeline for surface temperature, precipitation, and NDVI",
        "Wavelet decomposition into low- and high-frequency climate bands",
        "Bi-directional LSTM with attention mechanism for lag-1 to lag-12 forecasting",
        "Evaluation against ground meteorological stations across northwestern Iran"
      ],
      techStack: ["Python", "TensorFlow", "Google Earth Engine", "PyTorch", "GDAL", "Pandas", "Scikit-Learn"],
      highlights: [
        "Research paper in progress: 'Prediction of monthly dry days of Lake Urmia with Deep learning algorithms'.",
        "Successfully identified early drought warning signals 3 months prior to surface area contraction.",
        "Demonstrated superiority of deep learning over classical ARIMA and multivariate regression models."
      ]
    },
    {
      id: "gnss-ppk-logger",
      title: "Embedded GNSS PPK Data Logger & Hardware Payload",
      subtitle: "Custom Raspberry Pi / Jetson logging module for centimeter-grade UAV georeferencing",
      category: "photogrammetry",
      categoryLabel: "Embedded & Sensors",
      hardware: "Raspberry Pi 4 + Ublox ZED-F9P + IMU",
      metric: "±1.5 cm RTK/PPK Position Accuracy",
      description: "Built a ruggedized hardware data logger that captures raw GNSS carrier phase observations synced with camera hot-shoe trigger pulses for direct georeferencing without ground control points.",
      challenge: "Eliminating latency jitter between the camera shutter mechanical release and the GNSS epoch timestamp, which could otherwise introduce multi-meter errors at 15 m/s drone speeds.",
      solution: "Connected optocoupler-isolated hotshoe trigger interrupt lines directly to GPIO pins with microsecond-level hardware interrupts. Handled continuous binary UBX logging to high-speed NVMe storage with automated RINEX conversion.",
      architecture: [
        "Microsecond hardware interrupt service routine for camera exposure timestamps",
        "Continuous UBX raw observation logging at 10Hz",
        "Automated script invoking RTKLIB convbin and rnx2rtkp against local base station",
        "CSV/EXIF geo-tag injection into RAW photo files prior to photogrammetry ingestion"
      ],
      techStack: ["C++", "Python", "RTKLIB", "Raspberry Pi", "Linux / systemd", "I2C/UART Protocols"],
      highlights: [
        "Enabled direct georeferencing on commercial drones, cutting field GCP placement time by 75%.",
        "Processed hundreds of aerial mapping flights with zero data loss or dropped trigger epochs.",
        "Packaged in a lightweight 3D-printed enclosure powered directly from UAV auxiliary rails."
      ]
    },
    {
      id: "webgis-parking-streaming",
      title: "Real-Time WebGIS Urban Parking Infrastructure",
      subtitle: "High-concurrency spatial API and live monitoring dashboard for metropolitan parking spaces",
      category: "geospatial",
      categoryLabel: "WebGIS & Full-Stack",
      hardware: "Distributed Docker Swarm / Cloud Nodes",
      metric: "<15ms Spatial Query Latency · 10k+ Live Nodes",
      description: "Architected a scalable WebGIS platform and streaming microservices to ingest live camera and sensor streams, calculate parking occupancy, and display real-time availability across Tehran.",
      challenge: "Handling concurrent spatial queries (k-nearest neighbors, polygonal containment) from thousands of concurrent users while ingesting high-frequency occupancy updates.",
      solution: "Engineered a spatial microservice using PostGIS with GiST spatial indexing, cached dynamic layers in Redis, and pushed live occupancy deltas to interactive Leaflet/Mapbox frontend via WebSockets.",
      architecture: [
        "FastAPI & Java Spring Boot microservice mesh containerized in Docker",
        "PostgreSQL + PostGIS for spatial queries and spatial buffer calculations",
        "Redis Pub/Sub message broker delivering spatial deltas over WebSockets",
        "Interactive frontend featuring vector tile rendering and turn-by-turn navigation endpoints"
      ],
      techStack: ["Python", "FastAPI", "PostgreSQL / PostGIS", "Redis", "Docker", "WebGIS", "WebSockets"],
      highlights: [
        "Designed and maintained during Navatel/SGAS role, processing thousands of real-time spatial events.",
        "Integrated Swagger API documentation and automated health checking.",
        "Achieved seamless sub-second map tile updates without full page reloads."
      ]
    },
    {
      id: "sparse-bundle-adjustment",
      title: "Robust Sparse Bundle Adjustment (SBA) from UAV Imagery",
      subtitle: "Non-linear least squares optimization for 3D camera pose and tie-point estimation",
      category: "photogrammetry",
      categoryLabel: "Applied Mathematics & 3D",
      metric: "0.42 px Mean Reprojection Error",
      description: "Developed a standalone implementation of sparse bundle adjustment utilizing the Levenberg-Marquardt algorithm in Python and C++ to solve large-scale collinearity condition equations.",
      challenge: "Handling degenerate camera geometries and out-of-order image acquisitions typical of low-altitude UAV mapping flights.",
      solution: "Constructed the Schur complement reduction to decouple camera pose increments from 3D ground point parameters, drastically speeding up Jacobian inversion for large sparse matrices.",
      architecture: [
        "Collinearity equation formulation with radial and tangential lens distortion",
        "Sparse block-matrix Jacobian structure computation",
        "Levenberg-Marquardt dampening factor adaptation with Huber robust loss",
        "Validation against synthetic benchmarks and real UAV flight telemetry"
      ],
      techStack: ["Python", "C++", "NumPy / SciPy", "Eigen", "OpenCV", "Photogrammetry"],
      highlights: [
        "Substantially reduced reprojection errors on irregular drone paths without physical GCPs.",
        "Utilized in teaching and research demonstrations at the University of Tehran."
      ]
    }
  ] as Project[],

  experience: [
    {
      company: "GEO-SUP",
      role: "Computer Vision Developer & Geospatial Systems Engineer",
      period: "Oct 2018 — Present",
      location: "Tehran, Iran",
      type: "Full-Time",
      description: "Lead technical engineering for UAV photogrammetry workflows, computer vision perception models, and spatial analytics systems deployed across infrastructure, mining, and aerial mapping operations.",
      achievements: [
        "Designed and executed end-to-end UAV photogrammetry pipelines for mine excavation, terrain elevation models (DEM/DSM), and volume estimation.",
        "Deployed YOLO-based object detection and vehicle tracking models on embedded NVIDIA Jetson platforms with custom TensorRT quantization.",
        "Engineered vision-based video stabilization systems fusing optical flow with IMU sensor feeds via MAVLink.",
        "Built custom QGIS plugins and automated Python/GDAL batch workflows to process multi-gigabyte point clouds and orthophotos.",
        "Supervised field operations, sensor calibration, and GNSS PPK/RTK base-rover setups."
      ],
      technologies: ["Python", "C++", "PyTorch", "YOLO", "OpenCV", "QGIS", "NVIDIA Jetson", "SfM/MVS", "RTKLIB", "Docker"]
    },
    {
      company: "Navatel — SGAS",
      role: "Full Stack Web Developer & Geospatial Systems",
      period: "Feb 2021 — Jul 2022",
      location: "Remote / Tehran, Iran",
      type: "Contract / Full-Time",
      description: "Engineered scalable web applications, REST/WebSocket APIs, and interactive geospatial mapping tools for real-time asset monitoring and data ingestion.",
      achievements: [
        "Architected WebSocket-based microservices to broadcast live geospatial telemetries to thousands of concurrent client dashboards.",
        "Designed PostGIS spatial databases and optimized spatial indexing to achieve sub-20ms query responses on millions of coordinate points.",
        "Collaborated with cross-functional teams using Docker, Git, Swagger API documentation, and agile Jira sprints."
      ],
      technologies: ["Node.js", "Python", "PostgreSQL / PostGIS", "WebSockets", "Docker", "Leaflet", "Swagger", "Redis"]
    },
    {
      company: "CRPLab — University of Tehran",
      role: "Geospatial Research Assistant",
      period: "May 2015 — Oct 2016",
      location: "Tehran, Iran",
      type: "Research",
      description: "Assisted in experimental data acquisition, close-range photogrammetry, and camera calibration for academic research projects.",
      achievements: [
        "Implemented camera calibration routines and epipolar geometry rectification for multi-view stereo experiments.",
        "Conducted 3D close-range scanning, surface mesh generation, and architectural heritage modeling.",
        "Supported field testing of early autonomous UAV platforms and ground control networks."
      ],
      technologies: ["MATLAB", "Photogrammetry", "Camera Calibration", "Multi-View Geometry", "Close-Range 3D"]
    }
  ] as Experience[],

  education: [
    {
      degree: "M.Sc. in Photogrammetry & Geospatial Engineering",
      institution: "School of Surveying and Geospatial Engineering, University of Tehran",
      period: "2021 — 2024",
      location: "Tehran, Iran",
      thesis: "Automatic Change Detection of Pavement Distress Using Deep Learning and UAV Imagery",
      thesisSupervisor: "Dr. Mahdi Hasanlou & Dr. Mohammad Saadat Seresht",
      highlights: [
        "Graduated from the premier engineering institution in Iran.",
        "Appointed Teaching Assistant for 'Advanced Digital Image Processing'.",
        "Coursework: Advanced Computer Vision, Deep Learning in Earth Observation, Estimation Theory & Least Squares, Digital Photogrammetry, SAR Imagery Analysis."
      ]
    },
    {
      degree: "B.Sc. in Geospatial Engineering",
      institution: "School of Surveying and Geospatial Engineering, University of Tehran",
      period: "2015 — 2020",
      location: "Tehran, Iran",
      highlights: [
        "Comprehensive foundations in Remote Sensing, Geodesy, Photogrammetry, GNSS GPS, Cartography, and Hydrology.",
        "Completed rigorous capstone projects in Bundle Adjustment, MATLAB image processing, and digital elevation modeling."
      ]
    }
  ],

  publications: [
    {
      title: "Automatic Road Pavement Distress Recognition Using Deep Learning Networks from Unmanned Aerial Imagery",
      status: "Published / Research Paper",
      domain: "Computer Vision & Infrastructure Monitoring",
      description: "Formulates an end-to-end methodology for detecting multi-class pavement distress (alligator cracks, potholes, linear fissures) from low-altitude drone imagery using optimized YOLO architectures."
    },
    {
      title: "Prediction of Monthly Dry Days of Lake Urmia with Deep Learning Algorithms",
      status: "In Progress / Submitted",
      domain: "Hydrology, Climate AI & Earth Observation",
      description: "Utilizes long-term satellite sensor datasets (MODIS, CHIRPS) with LSTM recurrent networks to forecast Standardized Precipitation Index (SPI) anomalies over the Lake Urmia basin."
    }
  ],

  references: [
    {
      name: "Dr. Mahdi Hasanlou",
      title: "Associate Professor",
      institution: "School of Surveying and Geospatial Engineering, University of Tehran",
      email: "hasanlou@ut.ac.ir"
    },
    {
      name: "Dr. Mohammad Saadat Seresht",
      title: "Associate Professor",
      institution: "School of Surveying and Geospatial Engineering, University of Tehran",
      email: "msaadat@ut.ac.ir"
    },
    {
      name: "Dr. Farzaneh Dadrass Javan",
      title: "Assistant Professor",
      institution: "Department of Earth Observation Science, ITC, University of Twente (Netherlands)",
      email: "f.dadrassjavan@utwente.nl"
    },
    {
      name: "Dr. Arash Malekian",
      title: "Professor",
      institution: "College of Agriculture & Natural Resources, University of Tehran",
      email: "malekian@ut.ac.ir"
    }
  ] as Reference[],

  terminalLogs: [
    {
      command: "yolo predict task=segment model=yolov8x-pavement.pt source=uav_flight_04.mp4 device=0 conf=0.45",
      output: [
        "Loading yolov8x-pavement.pt model to CUDA:0 (NVIDIA RTX / Jetson Xavier)...",
        "Model summary: 365 layers, 71,799,392 parameters, 344.1 GFLOPs",
        "video 1/1 (frame 142/1800) uav_flight_04.mp4: 1080x1920 3 alligator_cracks, 1 pothole, 42.1ms",
        "video 1/1 (frame 143/1800) uav_flight_04.mp4: 1080x1920 2 alligator_cracks, 39.8ms",
        "Speed: 2.1ms preprocess, 38.6ms inference, 1.4ms postprocess per frame (24.3 FPS avg)"
      ]
    },
    {
      command: "rnx2rtkp -p 2 -m 15 -o sol.pos rover_flight.obs base_station.obs nav_data.nav",
      output: [
        "RTKLIB v.2.4.3 b34 Kinematic Post-Processing Active...",
        "Epochs processed: 28,450 (Q=1 Fixed: 98.4%, Q=2 Float: 1.6%)",
        "Average baseline length: 2.341 km",
        "Standard Deviation: N=0.012m, E=0.014m, U=0.021m",
        "Direct georeferencing coordinates locked for 842 camera exposure pulses."
      ]
    },
    {
      command: "gdalwarp -t_srs EPSG:32639 -r cubic -co COMPRESS=DEFLATE ortho_flight_dem.tif gol_gohar_utm.tif",
      output: [
        "Creating output file that is 34200P x 28900L.",
        "Processing input file ortho_flight_dem.tif.",
        "0...10...20...30...40...50...60...70...80...90...100 - done.",
        "Output Projected Coordinate System: WGS 84 / UTM Zone 39N (GSD: 0.025m/pixel)"
      ]
    }
  ]
};
