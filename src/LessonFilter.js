
function LessonFilter({
    lessonType,
    onLessonTypeChange,
    minPrice,
    maxPrice,
    onPriceChange,
    difficulty,
    onDifficultyChange,
    requiresHorse,
    onRequiresHorseChange
})  {

    return (
        <div className="mb-4">
            <select className="form-control mb-2" value={lessonType} onChange={(e) => onLessonTypeChange(e.target.value)}>
                    <option value="">All Types</option>
                    <option value="Equestrian">Equestrian</option>
                    <option value="Horseback">Horseback Riding</option>
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

                  <select className="form-control mb-2" value={difficulty} onChange={(e) => onDifficultyChange(e.target.value)}>
                    <option value="">All Difficulties</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Expert">Expert</option>
                  </select>

                  <select className="form-control mb-2" value={requiresHorse} onChange={(e) => onRequiresHorseChange(e.target.value)}>
                    <option value="">Horse Required?</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
    );
}

export default LessonFilter