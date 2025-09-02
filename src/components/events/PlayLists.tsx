import TablePage from "../shared/TablePage";
import { eventsLinks } from "./partials/EventsNavigation";
import {
  fetchSeries,
} from "../../slices/seriesSlice";
import {
  loadSeriesIntoTable,
} from "../../thunks/tableThunks";
import { getTotalSeries } from "../../selectors/seriesSeletctor";
import { seriesTemplateMap } from "../../configs/tableConfigs/seriesTableMap";

function PlayLists() {
	return (
		<>
			<TablePage
				resource={"playLists"}
				fetchResource={fetchSeries}
				loadResourceIntoTable={loadSeriesIntoTable}
				getTotalResources={getTotalSeries}
				navBarLinks={eventsLinks}
				navBarCreate={{
						accessRole: "ROLE_UI_SERIES_CREATE",
						text: "EVENTS.EVENTS.ADD_PLAYLIST",
						resource: "series",
					}}
				caption={"EVENTS.PLAYLISTS.TABLE.CAPTION"}
				templateMap={seriesTemplateMap}
			>
			</TablePage>

		</>
	);
}

export default PlayLists;
