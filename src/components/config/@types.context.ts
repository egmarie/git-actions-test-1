export type CamContextType = {
    camPos: THREE.Vector3 | undefined;
    setCam: React.Dispatch<React.SetStateAction<THREE.Vector3>>;
    fullmap: Boolean;
    setMap: React.Dispatch<React.SetStateAction<boolean>>;
    scenes: String;
    setScene: React.Dispatch<React.SetStateAction<string>>;
  };