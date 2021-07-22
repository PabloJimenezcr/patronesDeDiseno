import logger from './logger.js';

function secondRun(){
    logger.printCount();
    logger.log('Loren ipsum dolor sit amen...');
    logger.printCount();
}
export{
    secondRun
};