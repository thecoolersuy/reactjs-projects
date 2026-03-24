function Card({
    medium,
    amount,
    onAmountChange,
    onCurrencyChange,
    selectCurrency,
    currencyOptions,
    amountDisable = false,
    currencyDisable = false

}){
    

    return(
        <>
          <div className="bg-[#e9fbef] flex flex-col p-10 gap-5 rounded-2xl">
             <div className="flex flex-row gap-60">
                <label className="text-2xl text-[#072621] font-bold">{medium}</label>
                <label className="text-2xl text-[#072621] font-bold">Currency Type</label>
             </div>
             <div className="flex flex-row gap-12" >
                <input type="number" className="text-xl text-[#072621] border-2 rounded-2xl font-bold" 
                value={amount} disabled={amountDisable} 
                onChange={(e)=>onAmountChange(e.target.value)} ></input>
                <select className="text-2xl text-[#072621] font-bold" value={selectCurrency}
                onChange={(e) =>onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled={currencyDisable}>
                    {currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
             </div>
          </div>
        </>
    )
}

export default Card