import logger from '../../../../Config/logger';
import { SocialMediaRequest } from '../../../../Mapping/Request/SocialMedia';
class FurnitureRequest extends SocialMediaRequest {

    constructor(data: any) {
        super(data)
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
    }
}

export default FurnitureRequest;