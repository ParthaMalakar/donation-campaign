

const Category = ({ category }) => {
    return (
        <div>

            <div className="card  bg-base-100 shadow-xl">
                <figure><img className="w-[312px] h-[194px]" src={category.picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {category.category}
                    </h2>
                    <p>{category.title}</p>
                </div>
            </div>
        </div>
    );
};

export default Category;