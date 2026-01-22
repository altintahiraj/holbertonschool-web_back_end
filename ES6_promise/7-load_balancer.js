export default function loadBalancer(chinaDowload, USDownload){
    return Promise.race([chinaDownload, USDownload]);
}
