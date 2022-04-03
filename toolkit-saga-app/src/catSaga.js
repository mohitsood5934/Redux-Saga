import { call, put, takeEvery } from "redux-saga/effects";
import { getCatsSuccess, getCatsFailure } from "./catState";

function* workGetCatsFetch() {
  try {
    const cats = yield call(() => fetch("https://api.thecatapi.com/v1/breeds"));
    const formattedCats = yield cats.json();
    const formattedCatsShortened = formattedCats.slice(0, 10);
    yield put(getCatsSuccess(formattedCatsShortened));
  } catch (error) {
    yield put(getCatsFailure());
  }
}

// watcher functions
function* catSaga() {
  // pattern matching -> 'sliceName/fnName'
  yield takeEvery("cats/getCatsFetch", workGetCatsFetch);
}

export default catSaga;
