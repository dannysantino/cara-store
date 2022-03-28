const importImages = r => {
    let images = {};
    r.keys().map(e => images[e.replace('./', '')] = r(e));
    return images;
}

export default importImages