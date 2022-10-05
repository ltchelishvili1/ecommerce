
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils"
import { createAction } from "../../utils/reducer/reducer.utils"
import USER_CATEGORIES_TYPE from "./category.types"

export const fetchCateoriesStart = () => createAction(USER_CATEGORIES_TYPE.FETCH_CATEGORIES_START)

export const fetchCateoriesSuccess = (categoriesMap) => createAction(USER_CATEGORIES_TYPE.FETCH_CATEGORIES_SUCCESS, categoriesMap)

export const fetchCateoriesFailed = (error) => createAction(USER_CATEGORIES_TYPE.FETCH_CATEGORIES_FAILED, error)


export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCateoriesStart())
    try {
        const categoryMap = await getCategoriesAndDocuments()
        dispatch(fetchCateoriesSuccess(categoryMap))
    } catch (error) {
        dispatch(fetchCateoriesFailed(error))
    }

}
