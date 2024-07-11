function HorseFilter({
    breedType,
    onbreedTypeChange,
    minPrice,
    maxPrice,
    onPriceChange,
    minAge,
    maxAge,
    onAgeChange,
    purchaseType,
    onpurchaseTypeChange
}){
return (
        <div className="mb-4">
            <select className="form-control mb-2" value={breedType} onChange={(e) => onbreedTypeChange(e.target.value)}>
                    <option value="">All Breeds</option>
                    <option value="Arabian">Arabian</option>
                    <option value="Morgan">Morgan</option>
                    <option value="Thoroughbred">Thoroughbred</option>
                    <option value="Quarter Horse">Quarter Horse</option>
                    <option value="Appaloosa">Appaloosa</option>
                    <option value="Clydesdale">Clydesdale</option>
                    <option value="Shire">Shire</option>
                    <option value="Percheron">Percheron</option>
                    <option value="Belgian">Belgian</option>
                    <option value="Shetland Pony">Shetland Pony</option>
                    <option value="Welsh Pony">Welsh Pony</option>
                    <option value="Fell Pony">Fell Pony</option>
                    <option value="Icelandic Horse">Icelandic Horse</option>
                    <option value="Paso Fino">Paso Fino</option>
                    <option value="Dutch Warmblood">Dutch Warmblood</option>
                    <option value="Hanoverian">Hanoverian</option>
                    <option value="Trakehner">Trakehner</option>
                    <option value="Friesian">Friesian</option>
                    <option value="Gypsy Vanner">Gypsy Vanner</option>
                    <option value="Andalusian">Andalusian</option>
                    <option value="Lipizzaner">Lipizzaner</option>
                    <option value="Haflinger">Haflinger</option>
                  </select>

                  <div className="d-flex mb-2">
                    <input
                      type="number"
                      className="form-control mr-2"
                      placeholder="Min Price"
                      value={minPrice}
                      onChange={(e) => onPriceChange('min', e.target.value)}
                    />
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Max Price"
                      value={maxPrice}
                      onChange={(e) => onPriceChange('max', e.target.value)}
                    />
                  </div>

                  <div className="d-flex mb-2">
                    <input
                      type="number"
                      className="form-control mr-2"
                      placeholder="Min Age"
                      value={minAge}
                      onChange={(e) => onAgeChange('min', e.target.value)}
                    />
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Max Age"
                      value={maxAge}
                      onChange={(e) => onAgeChange('max', e.target.value)}
                    />
                  </div>

                  <select className="form-control mb-2" value={purchaseType} onChange={(e) => onpurchaseTypeChange(e.target.value)}>
                    <option value="">Purchase Option</option>
                    <option value="Lease">Lease</option>
                    <option value="Buy">Buy</option>
                  </select>

                </div>
    );
}

export default HorseFilter