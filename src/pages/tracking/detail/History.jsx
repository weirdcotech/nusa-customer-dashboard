import {
    Stack,
    Chip,
} from '@mui/material';
import MainCard from '@src/components/MainCard';
import { useEffect } from 'react';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IconFileDownload } from '@tabler/icons';
import { toastError } from '@src/components/mytoast';
import { FileService } from '@src/services/index';

// avatar style
const avatarSX = {
    width: 36,
    height: 36,
    fontSize: '1rem'
};

// action style
const actionSX = {
    mt: 0.75,
    ml: 1,
    top: 'auto',
    right: 'auto',
    alignSelf: 'flex-start',
    transform: 'none'
};

const STATUS = [
    {
      id: "RECEIVED_AT_ORIGIN",
      name: "Received at Origin",
    },
    {
      id: "ESTIMATION_TIME_DEPARTURE",
      name: "Estimated Time Departure",
    },
    {
      id: "ACTUAL_TIME_DEPARTURE",
      name: "Actual Time Departure",
    },
    {
      id: "ESTIMATION_TIME_ARRIVAL",
      name: "Estimated Time Arrival",
    },
    {
      id: "ARRIVED_AT_DESTINATION",
      name: "Arrived at Destination",
    },
    {
      id: "SHIPPING_TO_CUSTOMER",
      name: "Shipping to Customer",
    },
    {
      id: "COMPLETED",
      name: "Completed",
    },
  ];

const History = ({data}) => {
    useEffect(() => {
        console.log(data);
    }, [])

    const getTimelineTitle = (itm) => {
        // var title = getDate(itm.createdDate);
        var title = itm.createdDate;
        if (itm.status == "COMPLETED") {
          title += "";
        } else if (itm.status == "SHIPPING_TO_CUSTOMER") {
          title += ` - ${itm.localCargoName??""}, ${itm.localReceiptNo??"-"}`
        } else {
          title += ' - ' + itm.location ?? "Procured";
        }
        return title;
    }

    const getStatusPackage = (status) => {
        var label = "-";
        for (var i = 0; i < STATUS.length; i++) {
          if (STATUS[i].id == status) {
            label = STATUS[i].name;
          }
        }
        return label;
    };

    const handleDownloadAttachment = (row) => {
      FileService.download(row.url).then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", row.name);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      }).catch((err) => {
        console.log(err);
        toastError(err?.response?.data?.message || "Download attachment error, please try again later ")
      });
    }

    const getItemColor = (i, item) => {
        return item.status == 'COMPLETED' ? "rgb(16, 204, 82)" : i === 0 ? "rgb(249 210 32)" : "rgb(33, 150, 243)"
    }

    return (
        <>
            <MainCard content={false}>
                <VerticalTimeline layout='1-column-left' lineColor='rgb(33, 150, 243)'>
                    {data?.reverse().map((e, i) => {
                        return (
                            <VerticalTimelineElement
                                key={e.id}
                                className="vertical-timeline-element--work"
                                // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                iconStyle={{ background: getItemColor(i, e), color: '#fff' }}
                            >
                                <h3 className="vertical-timeline-element-title">{getTimelineTitle(e)}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{getStatusPackage(e.status)}</h4>
                                {e.note && e.note.trim() != "" &&
                                    <p style={{marginBottom: '10px'}}>{e.note}</p>
                                }
                                {e.attachments && e.attachments.length > 0 &&
                                  <Stack direction="row" spacing={0}
                                  sx={{ flexWrap: 'wrap', gap: 1 }}>
                                    {e.attachments.map((a) => {
                                      return (
                                        <Chip icon={<IconFileDownload />} color="primary" label={a.name} onClick={() => handleDownloadAttachment(a)} />
                                      )
                                    })}
                                  </Stack>
                                }
                            </VerticalTimelineElement>
                        )
                    })}
                </VerticalTimeline>
            </MainCard>
        </>
    )
}

export default History;