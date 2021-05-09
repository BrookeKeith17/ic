initSidebarItems({"constant":[["LABEL_STATUS",""],["METRIC_BUILD_PAYLOAD_DURATION",""],["METRIC_SLICE_MESSAGES",""],["METRIC_SLICE_PAYLOAD_SIZE",""],["POOL_SLICE_BYTE_SIZE_MAX","Hard maximum slice size in bytes. We only pool up to 4 MB from any one stream."],["STATUS_SUCCESS",""],["SYSTEM_SUBNET_STREAM_MSG_LIMIT","Message count limit for `System` subnet outgoing streams used for throttling the matching input stream."]],"enum":[["XNetClientError",""]],"fn":[["pool_slice","Puts the provided slice into the payload builder's slice pool."],["xnet_payload_builder_with_xnet_client","Test helper for creating a `XNetPayloadBuilder` around a provided `XNetClient`."]],"struct":[["PoolRefillTask","An async task that refills the slice pool."],["RefillTaskHandle","A handle for a `PoolRefillTask`to be used for triggering pool refills and terminating the task (by dropping the handle)."],["XNetEndpointResolver","Resolves a stream index and byte limit to an `EndpointLocator`, consisting of URL, node ID and proximity."],["XNetPayloadBuilderMetrics",""]],"trait":[["XNetClient","An async `XNetEndpoint` client."]]});