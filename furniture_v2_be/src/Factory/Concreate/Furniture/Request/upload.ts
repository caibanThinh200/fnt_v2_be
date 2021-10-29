import logger from '../../../../Config/logger';
import { UploadRequest } from '../../../../Mapping/Request/UploadRequest';
class FurnitureUploadRequest extends UploadRequest {
    private code: any;
    private image: any;

    constructor(data: any) {
        super(data)
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
    }
}

export default FurnitureUploadRequest;