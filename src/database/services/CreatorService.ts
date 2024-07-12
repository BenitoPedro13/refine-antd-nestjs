import getConfig from "next/config";
import axios from "axios";

export const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
});

export class CreatorService {
  contextPath: string;

  constructor() {
    this.contextPath = getConfig().publicRuntimeConfig.contextPath;
  }

  //   async getCreator(id: string) {
  //     try {
  //       const res = await httpClient.get(`creators/get/${id}`);
  //       //console.log(res.data.rows);

  //       return res.data.rows[0] ? res.data.rows[0] : res.data.rows;
  //     } catch (exeption) {
  //       console.error(exeption);
  //     }
  //   }

  //   async getPrice(id: string) {
  //     try {
  //       const res = await httpClient.get(`creators/get_price/${id}`);
  //       //console.log(res.data.rows);

  //       return res.data.rows[0] ? res.data.rows[0] : res.data.rows;
  //     } catch (exeption) {
  //       console.error(exeption);
  //     }
  //   }

  //   async getCreatorByUser(id: string) {
  //     try {
  //       const res = await httpClient.get(`creators/get_by_user/${id}`);
  //       //console.log(res.data.rows);

  //       return res.data.rows[1] ? res.data.rows : res.data.rows[0];
  //     } catch (exeption) {
  //       console.error(exeption);
  //     }
  //   }

  async search(input: string) {
    try {
      const res = await httpClient.get(`creators/search/${input}`);
      //console.log(res.data.rows)
      return res.data.rows;
    } catch (exeption) {
      console.error(exeption);
    }
  }

  //   async getCreatorsAll() {
  //     try {
  //       const res = await httpClient.get("creators/get_all");
  //       //console.log(res.data.rows)
  //       return res.data.rows;
  //     } catch (exeption) {
  //       console.error(exeption);
  //     }
  //   }

  //   async countCreators() {
  //     try {
  //       const res = await httpClient.get("count/users");
  //       //console.log(res.data.rows)
  //       return res.data.rows;
  //     } catch (exeption) {
  //       console.error(exeption);
  //     }
  //   }

  //   async updateAgents(id_creator: string, agents: []) {
  //     try {
  //       const res = await httpClient.post("creators/update_agents", {
  //         id_creator,
  //         agents,
  //       });
  //       //console.log(res.data.rows)
  //       return res.data.rows;
  //     } catch (exeption) {
  //       console.error(exeption);
  //     }
  //   }

  //   async deleteAgents(id_creator: string, agents: []) {
  //     try {
  //       const res = await httpClient.post("creators/delete_agents", {
  //         id_creator,
  //         agents,
  //       });
  //       //console.log(res.data.rows)
  //       return res.data.rows;
  //     } catch (exeption) {
  //       console.error(exeption);
  //     }
  //   }
}
