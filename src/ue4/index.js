import {ue4, ue} from './ue4lib';
import gameInterface from './ue4interface';
import delInterface from './del/interface';
import delRequests from './del/requests';
import ue4requests from './ue4requests';

ue.interface = {
    ...gameInterface,
    ...delInterface
};
ue.requests = {
    ...ue4requests,
    ...delRequests
};

export {ue4, ue};