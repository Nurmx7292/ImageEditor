export const filterConf = (options) => {
    let filters = options.map((elem,index)=>{
      return `${elem.property}(${elem.value}${elem.unit})`
    })
    return filters.join(" ");

  }
