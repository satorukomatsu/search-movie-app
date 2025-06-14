import string from '../const/string'

interface Props {
  currentPage: number
  totalPages: number
  loadMore: () => Promise<void>
}

function LoadMoreButton ({
  currentPage,
  totalPages,
  loadMore
}: Props) {
  return (
    <div>
      <button
        // 検索前もしくは最終ページまで検索した場合は非活性化に制御
        disabled={!currentPage || currentPage >= totalPages}
        onClick={() => void loadMore()}
      >{string.LOAD_MORE}</button>
    </div>
  )
}

export default LoadMoreButton
